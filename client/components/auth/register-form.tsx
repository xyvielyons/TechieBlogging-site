"use client"
import React, { useState } from 'react'
import { CardWrapper } from './card-wrapper'
import { useForm } from 'react-hook-form'
import {zodResolver} from "@hookform/resolvers/zod"
import {
Form,
FormControl,
FormField,
FormItem,
FormLabel,
FormMessage
} from "@/components/ui/form"
import * as z from "zod"
import { RegisterSchema } from '@/schemas'
import { Input } from '../ui/input'
import { Button } from '../ui/button'
import { log } from 'console'
import { FormError } from '../form-error'
import { FormSuccess } from '../form-success'
import { Register } from '@/actions/register'
import { useTransition } from 'react'
export default function RegisterForm() {
  const [isPending,startTransition] = useTransition()
  const [error,setError] = useState<string | undefined>("")
  const [success,setSuccess] = useState<string | undefined>("")
  const form:any = useForm<z.infer<typeof RegisterSchema>>({
    resolver:zodResolver(RegisterSchema),
    defaultValues:{
      firstName:"",
      lastName:"",
      email:"",
      password:"",
      confirmPassword:""
    },
    mode:"onBlur"
  })
  const onSubmit = (values:z.infer<typeof RegisterSchema>)=>{
    setSuccess("")
    setError("")
    startTransition(()=>{
      Register(values).then((data:any)=>{
        setError(data.error)
        setSuccess(data.success)
      })

    })
  
  }

  return (
    <CardWrapper
    header="Register 😃"
    headerLabel='Please complete the form below to create an account'
    backButtonLabel="Already have an account?"
    backButtonHref='/auth/login'
    showSocial={true}
    >
      <Form {...form}>
        <form 
        onSubmit={form.handleSubmit(onSubmit)}
        className='space-y-6'
        >
          <div className='space-y-4'>

          <FormField
            control={form.control}
            name="firstName"
            render={({field})=>(
              <FormItem>
                {/* <FormLabel>Name</FormLabel> */}
                <FormControl>
                  <Input
                  {...field}
                  placeholder='first name'
                  disabled={isPending}
                  ></Input>
                </FormControl>
                <FormMessage/>

              </FormItem>
            )}
            />
          <FormField
            control={form.control}
            name="lastName"
            render={({field})=>(
              <FormItem>
                {/* <FormLabel>Name</FormLabel> */}
                <FormControl>
                  <Input
                  {...field}
                  placeholder='last name'
                  disabled={isPending}
                  ></Input>
                </FormControl>
                <FormMessage/>

              </FormItem>
            )}
            />
            <FormField
            control={form.control}
            name="email"
            render={({field})=>(
              <FormItem>
                {/* <FormLabel>Email</FormLabel> */}
                <FormControl>
                  <Input
                  {...field}
                  placeholder='john.doe@example.com'
                  type="email"
                  disabled={isPending}
                  ></Input>
                </FormControl>
                <FormMessage/>

              </FormItem>
            )}
            />

          <FormField
            control={form.control}
            name="password"
            render={({field})=>(
              <FormItem>
                {/* <FormLabel>Password</FormLabel> */}
                <FormControl>
                  <Input
                  {...field}
                  placeholder='password'
                  type="password"
                  disabled={isPending}
                  ></Input>
                </FormControl>
                <FormMessage/>

              </FormItem>
            )}
            />
          <FormField
            control={form.control}
            name="confirmPassword"
            render={({field})=>(
              <FormItem>
                {/* <FormLabel>Password</FormLabel> */}
                <FormControl>
                  <Input
                  {...field}
                  placeholder='confirmpassword'
                  type="password"
                  disabled={isPending}
                  ></Input>
                </FormControl>
                <FormMessage/>

              </FormItem>
            )}
            />

          </div>
          <FormError message={error}></FormError>
          <FormSuccess message={success}></FormSuccess>
          <Button type='submit' disabled={isPending} className='w-full'>Create an account</Button>

        </form>
      </Form>
    </CardWrapper>
  )
}
