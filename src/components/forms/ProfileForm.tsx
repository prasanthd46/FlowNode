'use client'
import React, { useEffect, useState } from 'react'
import { FormProvider, useForm} from "react-hook-form"
import {zodResolver} from '@hookform/resolvers/zod'
import {z} from "zod"
import { EditUserProfileSchema } from '@/lib/type'
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from '../ui/form'
import { Input } from '../ui/input'
import { Button } from '../ui/button'
import { Edit, Loader2 } from 'lucide-react'
type Props = {
    user:any,
    onUpdate?:any
}

const ProfileForm = ({user,onUpdate}: Props) => {
    const [isLoading,setIsLoading ] =useState(false)
    const form = useForm<z.infer<typeof EditUserProfileSchema>>({
        mode:'onChange',
        resolver:zodResolver(EditUserProfileSchema),
        defaultValues:{
            name:user.name,
            email:user.email
        }
    })
    const handleSubmit = async (values:z.infer<typeof EditUserProfileSchema>)=>{
        setIsLoading(true)
        await onUpdate(values.name)
        setIsLoading(false)
    }
    useEffect(()=>{
        form.reset({name:user.name,email:user.email})
    },[user])
  return (
    <FormProvider {...form} >
        <form className=" flex flex-col gap-6"
            onSubmit={form.handleSubmit(handleSubmit)} >
            <FormField
                disabled= {isLoading}
                control={form.control}
                name="name"
                render = {({field})=>(
                    <FormItem>
                        <FormLabel className="text-lg">User Full Name</FormLabel>
                        <FormControl>
                            <Input  {...field}   placeholder = "Name" />
                        </FormControl>
                        <FormMessage />
                    </FormItem>
                )}
            />
             <FormField
                
                control={form.control}
                name="email"
                render = {({field})=>(
                    <FormItem>
                        <FormLabel className="text-lg">Email</FormLabel>
                        <FormControl>
                            <Input {...field} disabled= {true} placeholder = "email"   type="email"/>
                        </FormControl>
                        <FormMessage />
                    </FormItem>
                )}
            />
            <Button type="submit" className="self-start  bg-black  hover:bg-[#2F006B] hover:text-white border-[#303030] border~ ">
                {
                isLoading ? 
                <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" /> 
                Saving
                </>:
                ("Save User Settings")
                }
            </Button>


        </form>
    </FormProvider>
  )
}
export default ProfileForm