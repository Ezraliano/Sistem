'use client'

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from "zod"
import { EditUserProfileschema } from "@/lib/type";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "../ui/form";
import { Input } from "../ui/input";
import { Loader2, Loader2Icon } from "lucide-react";
import { Button } from "../ui/button";

type props ={}

const Profileforms = (props: props) => {
    const [isloading, setisloading] = useState (false)
    const form = useForm<z.infer<typeof EditUserProfileschema>>({
        mode: 'onChange',
        resolver: zodResolver(EditUserProfileschema),
        defaultValues: {
          name: '',
          email: '',
        }
    })
    return (
      <Form {...form}>
        <form className="flex flex-col gap-6"
        onSubmit={() => {}}
        >
          <FormField 
          disabled={isloading}
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-lg">User full name</FormLabel>
              <FormControl>
                <Input
                  {...field}
                  placeholder="Name"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
            
          )}
          />
          <FormField 
          disabled={true}
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-lg">User Email</FormLabel>
              <FormControl>
                <Input
                 placeholder="email"
                 type="email"
                 {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
          />
          <Button
          type="submit"
          className="self-start  hover:bg-[#2F006B] hover:text-white hover:boder-[1px]" 
          >
            {isloading ?(
              <>
              <Loader2Icon className="mr-2 h-4 w-4 animate spin"/>
              saving
              </>
            ) : ('save user setting')
            }

          </Button>
        </form>
      </Form>
      
    )
  }

export default Profileforms