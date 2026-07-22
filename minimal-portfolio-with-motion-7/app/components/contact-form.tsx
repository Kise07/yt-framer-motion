"use client";
import { useState } from "react";
import { toast } from "sonner";

export const ContactForm = () => {
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("handle submit clicked");

    const { name, email, message } = formData;

    if (!name || !email || !message) {
      toast.error("Please fill in all fields");
      return;
    }

    // call your API here to submit the form.
    // here's a mock API call for you.

    const response = await new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve("API call successful");
      }, 1000);
    });

    if (response) {
      toast.success("Form submitted successfully");
    } else {
      toast.error("Something went wrong");
    }
  };

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>,
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  return (
    <form
      onSubmit={handleSubmit}
      className="mx-auto flex max-w-lg flex-col gap-5 py-10"
    >
      <div className="flex flex-col gap-2">
        <label
          htmlFor="name"
          className="text-sm font-medium tracking-tight text-neutral-600"
        >
          Full name
        </label>
        <input
          id="name"
          name="name"
          onChange={handleChange}
          type="text"
          placeholder="Tyler Durden"
          className="shadow-aceternity focus:ring-primary rounded-md px-2 py-1 text-sm focus:ring-2 focus:outline-none"
        />
      </div>
      <div className="flex flex-col gap-2">
        <label
          htmlFor="email"
          className="text-sm font-medium tracking-tight text-neutral-600"
        >
          Email Address
        </label>
        <input
          id="email"
          name="email"
          onChange={handleChange}
          type="text"
          placeholder="tyler@projectmayhem.com"
          className="shadow-aceternity focus:ring-primary rounded-md px-2 py-1 text-sm focus:ring-2 focus:outline-none"
        />
      </div>
      <div className="flex flex-col gap-2">
        <label
          htmlFor="message"
          className="text-sm font-medium tracking-tight text-neutral-600"
        >
          Message here!
        </label>
        <textarea
          rows={5}
          id="message"
          name="message"
          onChange={handleChange}
          placeholder="You're crazy good, never change."
          className="shadow-aceternity focus:ring-primary resize-none rounded-md px-2 py-1 text-sm focus:ring-2 focus:outline-none"
        />
      </div>
      <button
        type="submit"
        className="bg-primary rounded-md px-4 py-2 text-white"
      >
        Send Message
      </button>
    </form>
  );
};
