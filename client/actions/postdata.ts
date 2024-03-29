'use server'

import { error } from "console"

interface PostType {
    userId?:string
    coverImageUrl?:string
    titleData?:string
    content?:string
    slug?:string
    categoryData?:string
}
export const GetPostData=(values:PostType)=>{
      
    const sendPost = async(url:string)=>{
        const response = await fetch(url,{
            method:"POST",
            headers:{
                "Content-Type":"application/json",
                'Authorization':'Bearer HY$i9@"yp[/ywn(=T:kCbO$r>V]OaP'

            },
            body:JSON.stringify({
                userId:values.userId,
                content:values.content,
                title:values.titleData,
                image:values.coverImageUrl,
                category:values.categoryData,
                slug:values.slug
            })

        })
        if(!response.ok){
            return {error:"Post not submitted"}
        }

        return await response.json()

    }
    console.log(sendPost("http://127.0.0.1:4000/api/post/createpost"))
    return{success:"Post successfully submitted",error:""}
    
}
