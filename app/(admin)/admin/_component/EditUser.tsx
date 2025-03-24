



// "use client";

// import { Button } from '@/components/ui/button';
// import React, { useEffect, useState } from 'react';
// import Image from 'next/image';
// import { Loader, Plus } from 'lucide-react';
// import { Input } from '@/components/ui/input';
// import { Textarea } from '@/components/ui/textarea';
// import { toast } from 'sonner';
// import { ScrollArea } from '@/components/ui/scroll-area';
// import { UserType } from '@/type/business_type';
// import { getUserById } from '@/app/api/get/user';
// import { adminUpdateUserInfo } from '@/app/api/put/user';

// interface Props {
//     userId: string; // Changed from businessId to userId
// }

// const EditUser = ({ userId }: Props) => {
//     const [userData, setUserData] = useState<UserType | null>(null);
//     const [selectedImage, setSelectedImage] = useState<string>('/LocalLogo.png'); // Default user profile image

//     // Local state to manage the form input values
//     const [formData, setFormData] = useState({
//         firstName: '',
//         lastName: '',
//         email: '',
//         phone: '',
//         address: '',
//         bio: '',
//         occupation: '',
//         job_descripton: '',
//     });

//     // Fetch user data
//     useEffect(() => {
//         const fetchData = async () => {
//             try {
//                 // Fetch user data
//                 const userResponse = await getUserById(userId);
//                 setUserData(userResponse.data);

//                 // Initialize selectedImage with the user's profile URL or a default image
//                 setSelectedImage(userResponse.data.profileUrl || '/LocalLogo.png');

//                 // Initialize formData with user data
//                 setFormData({
//                     firstName: userResponse.data.firstName || '',
//                     lastName: userResponse.data.lastName || '',
//                     email: userResponse.data.email || '',
//                     phone: userResponse.data.phone || '',
//                     address: userResponse.data.address || '',
//                     bio: userResponse.data.bio || '',
//                     occupation: userResponse.data.occupation || '',
//                     job_descripton: userResponse.data.job_descripton || ''
//                 });
//             } catch (error) {
//                 console.error('Error fetching user data:', error);
//             }
//         };

//         fetchData();
//     }, [userId]);

//     const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
//         const file = event.target.files?.[0];
//         if (file) {
//             const imageUrl = URL.createObjectURL(file);
//             setSelectedImage(imageUrl);
//         }
//     };

//     // Validate phone number format (must include a country code)
//     const validatePhoneNumber = (phone: string): boolean => {
//         const phoneRegex = /^\+\d{1,4}\s?\d{6,14}$/;
//         return phoneRegex.test(phone);
//     };

//     // Handle form submission (updating user data)
//     const handleSubmit = async (e: React.FormEvent) => {
//         e.preventDefault();

//         // Validate phone number
//         if (!validatePhoneNumber(formData.phone)) {
//             toast.error('Phone number must include a country code (e.g., +000 00 0000 0000)');
//             return;
//         }

//         try {
//             const userData = {
//                 phone: formData.phone,
//                 address: formData.address,
//                 bio: formData.bio,
//                 profileUrl: selectedImage,
//                 occupation: formData.occupation,
//                 job_descripton: formData.job_descripton
//             };

//             console.log(userData); 

//             const response = await adminUpdateUserInfo(userId, userData);
//             if (response) {
//                 toast.success('User updated successfully!');
//             } else {
//                 toast.error('Failed to update user.');
//             }
//         } catch (error) {
//             console.error('Error updating user data:', error);
//             toast.error('Error updating user.');
//         }
//     };

//     // Handle input change to update formData state
//     const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
//         const { id, value } = e.target;
//         setFormData((prevData) => ({
//             ...prevData,
//             [id]: value,
//         }));
//     };

//     // If the user data hasn't been loaded yet, return a loading indicator or null.
//     if (!userData) {
//         return (
//             <div className="w-full h-screen flex items-center justify-center">
//                 <div className="animate-spin"><Loader /></div>
//             </div>
//         );
//     }

//     return (
//         <div className="grid grid-cols-1 w-full py-10 px-5 md:px-20">
//             <div className="w-full flex flex-col gap-4 items-start overflow-scroll hidden-scrollbar">
//                 <ScrollArea className="h-100 flex items-start w-full flex-col space-y-6">
//                     <div className="flex flex-col items-center mb-4">
//                         <input
//                             type="file"
//                             onChange={handleFileChange}
//                             className="hidden"
//                             id="file-input"
//                             accept="image/*"
//                         />
//                         <label htmlFor="file-input" className="cursor-pointer">
//                             <div className="w-[60px] h-[60px] relative bg-[#A3C8ED4D] m-auto flex items-center justify-center rounded-full border-2">
//                                 <Image
//                                     src={selectedImage}
//                                     alt="User Image"
//                                     fill
//                                     className="rounded-full object-cover absolute"
//                                 />
//                                 <Plus className="absolute bottom-[-5px] right-[-0px] w-5 h-5 rounded-full bg-primary text-white" />
//                             </div>
//                         </label>
//                     </div>

//                     <form onSubmit={handleSubmit} className="w-full space-y-6">
//                         <div className="grid grid-cols-1 md:grid-cols-2 w-full justify-between gap-5 items-center">
//                             <div className="flex flex-col gap-2">
//                                 <label htmlFor="firstName" className="text-[13px] font-thin text-[#706A6A]">
//                                     First Name
//                                 </label>
//                                 <Input
//                                     placeholder="John"
//                                     value={formData.firstName}
//                                     id="firstName"
//                                     type="text"
//                                     className="border-none rounded-xl shadow-xl shadow-[#706A6A1A] bg-[#A3C8ED4D]"
//                                     onChange={handleInputChange}
//                                 />
//                             </div>

//                             <div className="flex flex-col gap-2">
//                                 <label htmlFor="lastName" className="text-[13px] font-thin text-[#706A6A]">
//                                     Last Name
//                                 </label>
//                                 <Input
//                                     placeholder="Doe"
//                                     value={formData.lastName}
//                                     id="lastName"
//                                     type="text"
//                                     className="border-none shadow-lg shadow-[#706A6A1A] bg-[#A3C8ED4D]"
//                                     onChange={handleInputChange}
//                                 />
//                             </div>
//                         </div>

//                         <div className="grid grid-cols-1 md:grid-cols-2 w-full justify-between gap-5 items-center">
//                             <div className="flex flex-col gap-2">
//                                 <label htmlFor="email" className="text-[13px] font-thin text-[#706A6A]">
//                                     Email
//                                 </label>
//                                 <Input
//                                     placeholder="john.doe@example.com"
//                                     value={formData.email}
//                                     id="email"
//                                     type="email"
//                                     className="border-none shadow-lg shadow-[#706A6A1A] bg-[#A3C8ED4D]"
//                                     onChange={handleInputChange}
//                                 />
//                             </div>

//                             <div className="flex flex-col gap-2">
//                                 <label htmlFor="phone" className="text-[13px] font-thin text-[#706A6A]">
//                                     Phone Number
//                                 </label>
//                                 <Input
//                                     placeholder="+234 80 1234 5678"
//                                     value={formData.phone}
//                                     id="phone"
//                                     type="text"
//                                     className="border-none shadow-lg shadow-[#706A6A1A] bg-[#A3C8ED4D]"
//                                     onChange={handleInputChange}
//                                 />
//                             </div>
//                         </div>

//                         <div className="flex flex-col gap-2 w-full">
//                             <label htmlFor="address" className="text-[13px] font-thin text-[#706A6A]">
//                                 Address
//                             </label>
//                             <Input
//                                 placeholder="8, MetalBox Road, Ikeja, Lagos"
//                                 value={formData.address}
//                                 id="address"
//                                 type="text"
//                                 className="border-none shadow-lg shadow-[#706A6A1A] bg-[#A3C8ED4D]"
//                                 onChange={handleInputChange}
//                             />
//                         </div>

//                         <div className="flex flex-col gap-2 w-full">
//                             <label htmlFor="occupation" className="text-[13px] font-thin text-[#706A6A]">
//                                 occupation
//                             </label>
//                             <Input
//                                 placeholder="painter, plumber"
//                                 value={formData.occupation}
//                                 id="address"
//                                 type="text"
//                                 className="border-none shadow-lg shadow-[#706A6A1A] bg-[#A3C8ED4D]"
//                                 onChange={handleInputChange}
//                             />
//                         </div>

//                         <div className="flex flex-col gap-2 w-full">
//                             <label htmlFor="bio" className="text-[13px] font-thin text-[#706A6A]">
//                                 Bio
//                             </label>
//                             <Textarea
//                                 placeholder="Bio"
//                                 value={formData.bio}
//                                 id="bio"
//                                 className="w-full h-[100px] max-h-[200px] border-none shadow-lg shadow-[#706A6A1A] p-2 bg-[#A3C8ED4D]"
//                                 onChange={handleInputChange}
//                             />
//                         </div>
//                         <div className="flex flex-col gap-2 w-full">
//                             <label htmlFor="JD" className="text-[13px] font-thin text-[#706A6A]">
//                             Job Descripton
//                             </label>
//                             <Textarea
//                                 placeholder="job descripton"
//                                 value={formData.job_descripton}
//                                 id="JD"
//                                 className="w-full h-[100px] max-h-[200px] border-none shadow-lg shadow-[#706A6A1A] p-2 bg-[#A3C8ED4D]"
//                                 onChange={handleInputChange}
//                             />
//                         </div>

//                         <div className="w-full lg:w-[80%] flex items-center justify-end">
//                             <Button type="submit">Save</Button>
//                         </div>
//                     </form>
//                 </ScrollArea>
//             </div>
//         </div>
//     );
// };

// export default EditUser;





"use client";

import { Button } from '@/components/ui/button';
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { Loader, Plus } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { toast } from 'sonner';
import { ScrollArea } from '@/components/ui/scroll-area';
import { UserType } from '@/type/business_type';
import { getUserById } from '@/app/api/get/user';
import { adminUpdateUserInfo } from '@/app/api/put/user';

interface Props {
    userId: string; // Changed from businessId to userId
}

const EditUser = ({ userId }: Props) => {
    const [userData, setUserData] = useState<UserType | null>(null);
    const [selectedImage, setSelectedImage] = useState<string>('/LocalLogo.png'); // Default user profile image

    // Local state to manage the form input values
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        address: '',
        bio: '',
        occupation: '',
        job_descripton: '',
    });

    // Fetch user data
    useEffect(() => {
        const fetchData = async () => {
            try {
                // Fetch user data
                const userResponse = await getUserById(userId);
                setUserData(userResponse.data);

                // Initialize selectedImage with the user's profile URL or a default image
                setSelectedImage(userResponse.data.profileUrl || '/LocalLogo.png');

                // Initialize formData with user data
                setFormData({
                    firstName: userResponse.data.firstName || '',
                    lastName: userResponse.data.lastName || '',
                    email: userResponse.data.email || '',
                    phone: userResponse.data.phone || '',
                    address: userResponse.data.address || '',
                    bio: userResponse.data.bio || '',
                    occupation: userResponse.data.occupation || '',
                    job_descripton: userResponse.data.job_descripton || ''
                });
            } catch (error) {
                console.error('Error fetching user data:', error);
            }
        };

        fetchData();
    }, [userId]);

    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        if (file) {
            const imageUrl = URL.createObjectURL(file);
            setSelectedImage(imageUrl);
        }
    };

    // Validate phone number format (must include a country code)
    const validatePhoneNumber = (phone: string): boolean => {
        const phoneRegex = /^\+\d{1,4}\s?\d{6,14}$/;
        return phoneRegex.test(phone);
    };

    // Handle form submission (updating user data)
    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        // Validate phone number
        if (!validatePhoneNumber(formData.phone)) {
            toast.error('Phone number must include a country code (e.g., +000 00 0000 0000)');
            return;
        }

        try {
            const userData = {
                phone: formData.phone,
                address: formData.address,
                bio: formData.bio,
                profileUrl: selectedImage,
                occupation: formData.occupation,
                job_descripton: formData.job_descripton
            };

            console.log(userData); 

            const response = await adminUpdateUserInfo(userId, userData);
            if (response) {
                toast.success('User updated successfully!');
            } else {
                toast.error('Failed to update user.');
            }
        } catch (error) {
            console.error('Error updating user data:', error);
            toast.error('Error updating user.');
        }
    };

    // Handle input change to update formData state
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { id, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [id]: value,
        }));
    };

    // If the user data hasn't been loaded yet, return a loading indicator or null.
    if (!userData) {
        return (
            <div className="w-full h-screen flex items-center justify-center">
                <div className="animate-spin"><Loader /></div>
            </div>
        );
    }

    return (
        <div className="grid grid-cols-1 w-full py-10 px-5 md:px-20">
            <div className="w-full flex flex-col gap-4 items-start overflow-scroll hidden-scrollbar">
                <ScrollArea className="h-100 flex items-start w-full flex-col space-y-6">
                    <div className="flex flex-col items-center mb-4">
                        <input
                            type="file"
                            onChange={handleFileChange}
                            className="hidden"
                            id="file-input"
                            accept="image/*"
                        />
                        <label htmlFor="file-input" className="cursor-pointer">
                            <div className="w-[60px] h-[60px] relative bg-[#A3C8ED4D] m-auto flex items-center justify-center rounded-full border-2">
                                <Image
                                    src={selectedImage}
                                    alt="User Image"
                                    fill
                                    className="rounded-full object-cover absolute"
                                />
                                <Plus className="absolute bottom-[-5px] right-[-0px] w-5 h-5 rounded-full bg-primary text-white" />
                            </div>
                        </label>
                    </div>

                    <form onSubmit={handleSubmit} className="w-full space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 w-full justify-between gap-5 items-center">
                            <div className="flex flex-col gap-2">
                                <label htmlFor="firstName" className="text-[13px] font-thin text-[#706A6A]">
                                    First Name
                                </label>
                                <Input
                                    placeholder="John"
                                    value={formData.firstName}
                                    id="firstName"
                                    type="text"
                                    className="border-none rounded-xl shadow-xl shadow-[#706A6A1A] bg-[#A3C8ED4D]"
                                    onChange={handleInputChange}
                                />
                            </div>

                            <div className="flex flex-col gap-2">
                                <label htmlFor="lastName" className="text-[13px] font-thin text-[#706A6A]">
                                    Last Name
                                </label>
                                <Input
                                    placeholder="Doe"
                                    value={formData.lastName}
                                    id="lastName"
                                    type="text"
                                    className="border-none shadow-lg shadow-[#706A6A1A] bg-[#A3C8ED4D]"
                                    onChange={handleInputChange}
                                />
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 w-full justify-between gap-5 items-center">
                            <div className="flex flex-col gap-2">
                                <label htmlFor="email" className="text-[13px] font-thin text-[#706A6A]">
                                    Email
                                </label>
                                <Input
                                    placeholder="john.doe@example.com"
                                    value={formData.email}
                                    id="email"
                                    type="email"
                                    className="border-none shadow-lg shadow-[#706A6A1A] bg-[#A3C8ED4D]"
                                    onChange={handleInputChange}
                                />
                            </div>

                            <div className="flex flex-col gap-2">
                                <label htmlFor="phone" className="text-[13px] font-thin text-[#706A6A]">
                                    Phone Number
                                </label>
                                <Input
                                    placeholder="+234 80 1234 5678"
                                    value={formData.phone}
                                    id="phone"
                                    type="text"
                                    className="border-none shadow-lg shadow-[#706A6A1A] bg-[#A3C8ED4D]"
                                    onChange={handleInputChange}
                                />
                            </div>
                        </div>

                        <div className="flex flex-col gap-2 w-full">
                            <label htmlFor="address" className="text-[13px] font-thin text-[#706A6A]">
                                Address
                            </label>
                            <Input
                                placeholder="8, MetalBox Road, Ikeja, Lagos"
                                value={formData.address}
                                id="address"
                                type="text"
                                className="border-none shadow-lg shadow-[#706A6A1A] bg-[#A3C8ED4D]"
                                onChange={handleInputChange}
                            />
                        </div>

                        <div className="flex flex-col gap-2 w-full">
                            <label htmlFor="occupation" className="text-[13px] font-thin text-[#706A6A]">
                                Occupation
                            </label>
                            <Input
                                placeholder="painter, plumber"
                                value={formData.occupation}
                                id="occupation"
                                type="text"
                                className="border-none shadow-lg shadow-[#706A6A1A] bg-[#A3C8ED4D]"
                                onChange={handleInputChange}
                            />
                        </div>

                        <div className="flex flex-col gap-2 w-full">
                            <label htmlFor="bio" className="text-[13px] font-thin text-[#706A6A]">
                                Bio
                            </label>
                            <Textarea
                                placeholder="Bio"
                                value={formData.bio}
                                id="bio"
                                className="w-full h-[100px] max-h-[200px] border-none shadow-lg shadow-[#706A6A1A] p-2 bg-[#A3C8ED4D]"
                                onChange={handleInputChange}
                            />
                        </div>

                        <div className="flex flex-col gap-2 w-full">
                            <label htmlFor="job_descripton" className="text-[13px] font-thin text-[#706A6A]">
                                Job Description
                            </label>
                            <Textarea
                                placeholder="Job description"
                                value={formData.job_descripton}
                                id="job_descripton"
                                className="w-full h-[100px] max-h-[200px] border-none shadow-lg shadow-[#706A6A1A] p-2 bg-[#A3C8ED4D]"
                                onChange={handleInputChange}
                            />
                        </div>

                        <div className="w-full lg:w-[80%] flex items-center justify-end">
                            <Button type="submit">Save</Button>
                        </div>
                    </form>
                </ScrollArea>
            </div>
        </div>
    );
};

export default EditUser;