// "use client";

// import React, { useState } from "react";
// import { Button } from "../components/ui/button";
// import {
//   Card,
//   CardContent,
//   CardDescription,
//   CardHeader,
//   CardTitle,
// } from "../components/ui/Card";
// import { Input } from "../components/ui/Input";
// import { Label } from "../components/ui/Label";
// import { Checkbox } from "../components/ui/Checkbox";
// import { Eye, EyeOff, HardDrive } from "lucide-react";
// import axios from "../api/axios";
// import { useNavigate } from "react-router-dom";

// const Rigistation = () => {
//   const [showPassword, setShowPassword] = useState(false);
//   const [showConfirmPassword, setShowConfirmPassword] = useState(false);
//   const [showModal, setShowModal] = useState(false);

//   const navigate = useNavigate();

//   const [form, setForm] = useState({
//     first_name: "",
//     last_name: "",
//     email: "",
//     password: "",
//     conFirmPass: "",
//   });

//   const handleChange = (e) => {
//     e.preventDefault();
//     setForm({ ...form, [e.target.name]: e.target.value });
//     console.log(e);
//   };
//   console.log(form);

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const respone = await axios.post("registration", form);
//       if (respone.data.success == true) {
//         setShowModal(true); // Show modal on success
//         setTimeout(() => {
//           setShowModal(false);
//           navigate("/"); // Redirect after 2s
//         }, 2000); // auto close after 2 seconds

//       }
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
//       <Card className="w-full max-w-md">
//         <CardHeader className="space-y-1">
//           <CardTitle className="text-2xl font-bold text-center">
//             Create Account
//           </CardTitle>
//           <CardDescription className="text-center">
//             Enter your information to create your account
//           </CardDescription>
//         </CardHeader>
//         <CardContent>
//           <form onSubmit={handleSubmit} className="space-y-4">
//             <div className="grid grid-cols-2 gap-4">
//               <div className="space-y-2">
//                 <Label htmlFor="firstName">First Name</Label>
//                 <Input
//                   id="firstName"
//                   name="first_name"
//                   type="text"
//                   placeholder="John"
//                   onChange={handleChange}
//                   required
//                 />
//               </div>
//               <div className="space-y-2">
//                 <Label htmlFor="lastName">Last Name</Label>
//                 <Input
//                   id="lastName"
//                   name="last_name"
//                   type="text"
//                   placeholder="Doe"
//                   onChange={handleChange}
//                   required
//                 />
//               </div>
//             </div>

//             <div className="space-y-2">
//               <Label htmlFor="email">Email Address</Label>
//               <Input
//                 id="email"
//                 name="email"
//                 type="email"
//                 placeholder="john.doe@example.com"
//                 onChange={handleChange}
//                 required
//               />
//             </div>

//             <div className="space-y-2">
//               <Label htmlFor="password">Password</Label>
//               <div className="relative">
//                 <Input
//                   id="password"
//                   name="password"
//                   type={showPassword ? "text" : "password"}
//                   placeholder="Enter your password"
//                   onChange={handleChange}
//                   required
//                 />
//                 <Button
//                   type="button"
//                   variant="ghost"
//                   size="sm"
//                   className="absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent"
//                   onClick={() => setShowPassword(!showPassword)}
//                 >
//                   {showPassword ? (
//                     <EyeOff className="h-4 w-4" />
//                   ) : (
//                     <Eye className="h-4 w-4" />
//                   )}
//                   <span className="sr-only">
//                     {showPassword ? "Hide password" : "Show password"}
//                   </span>
//                 </Button>
//               </div>
//             </div>

//             <div className="space-y-2">
//               <Label htmlFor="confirmPassword">Confirm Password</Label>
//               <div className="relative">
//                 <Input
//                   id="confirmPassword"
//                   name="conFirmPass"
//                   onChange={handleChange}
//                   type={showConfirmPassword ? "text" : "password"}
//                   placeholder="Confirm your password"
//                   required
//                 />
//                 <Button
//                   type="button"
//                   variant="ghost"
//                   size="sm"
//                   className="absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent"
//                   onClick={() => setShowConfirmPassword(!showConfirmPassword)}
//                 >
//                   {showConfirmPassword ? (
//                     <EyeOff className="h-4 w-4" />
//                   ) : (
//                     <Eye className="h-4 w-4" />
//                   )}
//                   <span className="sr-only">
//                     {showConfirmPassword ? "Hide password" : "Show password"}
//                   </span>
//                 </Button>
//               </div>
//               <div>
//                 {" "}
//                 <span
//                   className={
//                     form.password === form.conFirmPass &&
//                     form.conFirmPass !== ""
//                       ? "text-green-700"
//                       : "text-rose-700"
//                   }
//                 >
//                   {form.password !== form.conFirmPass || form.conFirmPass === ""
//                     ? "Not match"
//                     : "good"}
//                 </span>
//               </div>
//             </div>

//             <div className="flex items-center space-x-2">
//               <Checkbox id="terms" required />
//               <Label
//                 htmlFor="terms"
//                 className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
//               >
//                 I agree to the{" "}
//                 <a
//                   href="#"
//                   className="text-primary underline underline-offset-4 hover:text-primary/80"
//                 >
//                   Terms of Service
//                 </a>{" "}
//                 and{" "}
//                 <a
//                   href="#"
//                   className="text-primary underline underline-offset-4 hover:text-primary/80"
//                 >
//                   Privacy Policy
//                 </a>
//               </Label>
//             </div>

//             <Button type="submit" className="w-full">
//               Create Account
//             </Button>

//             <div className="text-center text-sm">
//               Already have an account?{" "}
//               <a
//                 href="#"
//                 className="text-primary underline underline-offset-4 hover:text-primary/80"
//               >
//                 Sign in
//               </a>
//             </div>
//           </form>
//         </CardContent>
//       </Card>
//     </div>
//   );
// };
// export default Rigistation;
