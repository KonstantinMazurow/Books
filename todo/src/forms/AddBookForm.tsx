import axios from "axios";
import { useForm } from "react-hook-form";
import { APIURL } from "../configs/configs";

export default function AddBookForm() {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = (data: any) => {
        axios.post(APIURL, {
            author: data.BookAuthor,
            book_name: data.BookName
        })
        .then ((response) => {
          console.log(response);  
    })}
  return (
     <form onSubmit={handleSubmit(onSubmit)}>
        <input placeholder="Enter Book Author" {...register("BookAuthor", { required: true })} />
        {errors.BookAuthor && <span style={{color: 'red'}}>This field is required*</span>}
        <input placeholder="Enter Book Name" {...register("BookName", { required: true })} />
        {errors.BookName && <span style={{color: 'red'}}>This field is required*</span>}
        <input type="submit" />
    </form>
  )
}
