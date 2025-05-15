"use client"

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

const schema = z.object({
  username: z
  .string()
  .min(3, { message: 'Username must be at least 3 characters long!'})
  .max(20, { message: 'Username must be at most 20 characters long!'}),
  email: z.string().email({message:"Invalid email address!"}),
  password: z
  .string()
  .min(8, { message: 'Password must be at least 8 characters long!'}), 
  firstName: z.string().min(1, { message: 'First name is required!'}),
  lastName: z.string().min(1, { message: 'Last name is required!'}),
  phoneNumber: z.string().min(1, { message: 'Phone number is required!'}),
  address: z.string().min(1, { message: 'Addressis required!'}),
  dateOfBirth: z.date( { message: 'Date of birth is required!'}),
  gender: z.enum(["male","female"], {message: "Gender is required!"}),
  img: z.instanceof(File, {message: "Image is required!"})
}); 
 
const LecturerForm = ({
    type, 
    data,
}:{
    type:"create" | "update";
    data?: any;
}) => {

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: zodResolver(schema),
    });

     return(
        <form className="flex flex-col gap-8">
            <h1 className="text-xl font-semibold">Create a new lecturer</h1>
            <span className="text-xs text-gray-gray-400 font-mediumo">Authentication Information</span>
            <input type="text" 
                {...register("username")} 
                className="ring-[1.5px] ring-gray-300 p-2 rounded-md text-sm"
            />
                {errors.username?.message && <p>{errors.username?.message.toString()}</p>}
            <span className="text-xs text-gray-gray-400 font-mediumo">
                Personal Information
            </span>
            <button className="bg-blue text-white p-2 rounded-md">{type === "create" ? "Create" : "Update"}</button>
        </form>
     )
}

export default LecturerForm 