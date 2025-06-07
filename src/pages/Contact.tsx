//import React from "react";
import { useForm } from "react-hook-form";

type FormData = {
  name: string;
  email: string;
  message: string;
};

const Contact = () => {
  // const {
  //   register,
  //   handleSubmit,
  //   reset,
  //   formState: { errors, isSubmitSuccessful },
  // } = useForm<FormData>();

  // const onSubmit = (data: FormData) => {
  //   console.log("Form Submitted:", data);
  //   reset();
  // };
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit = async (data: FormData) => {
    try {
      const response = await fetch("http://localhost:5000/api/send", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        alert("Message sent!");
        reset();
      } else {
        alert("Failed to send message.");
      }
    } catch (err) {
      console.error(err);
      alert("Error sending message.");
    }
  };

  return (
    <div className="max-w-3xl mx-auto p-6">
      <h2 className="text-3xl font-bold mb-6 text-center">Contact Me</h2>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="max-w-xl mx-auto p-6 space-y-4 bg-white rounded-xl shadow-xl"
      >
        <h2 className="text-2xl font-bold">Contact Me</h2>

        <div>
          <label className="block mb-1 font-medium">Name</label>
          <input
            {...register("name", { required: true })}
            className="w-full px-4 py-2 border rounded-md"
          />
          {errors.name && (
            <p className="text-red-600 text-sm">Name is required.</p>
          )}
        </div>

        <div>
          <label className="block mb-1 font-medium">Email</label>
          <input
            {...register("email", {
              required: "Email is required.",
              pattern: { value: /^\S+@\S+$/i, message: "Invalid email." },
            })}
            className="w-full px-4 py-2 border rounded-md"
          />
          {errors.email && (
            <p className="text-red-600 text-sm">{errors.email.message}</p>
          )}
        </div>

        <div>
          <label className="block mb-1 font-medium">Message</label>
          <textarea
            {...register("message", { required: true })}
            rows={5}
            className="w-full px-4 py-2 border rounded-md"
          />
          {errors.message && (
            <p className="text-red-600 text-sm">Message is required.</p>
          )}
        </div>

        <button
          type="submit"
          className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition"
        >
          Send Message
        </button>
      </form>
    </div>
  );
};

export default Contact;
