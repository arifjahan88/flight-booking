export const registerFormData = [
    {
      label: "User Name",
      type: "text",
      name: "username",
      required: true,
    },
    {
      label: "Your Full Name",
      type: "text",
      name: "fullname",
      required: true,
    },
    {
      label: "Email",
      type: "email",
      name: "email",
      required: true,
    },
    {
      label: "Phone",
      type: "text",
      name: "phone",
      required: false,
    },
    {
      label: "Password",
      type: "password",
      name: "password",
      required: true,
    },
  ];
  
  export const loginFormData = [
    {
      label: "Email",
      type: "email",
      name: "email",
      required: "*Email is required",
    },
    {
      label: "Password",
      type: "password",
      name: "password",
      required: "*Password is required",
    },
  ];