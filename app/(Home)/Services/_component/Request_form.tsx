

'use client';

import { getUserInfo } from '@/app/api/auth/user';
import { createServices } from '@/app/api/post/createSpecialService';
import { fetchAllServices } from '@/app/api/get/getData';
import { SpecialRequestType } from '@/type/business_type';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Loader, MoveUpRight } from 'lucide-react';
import Link from 'next/link';
import React, { useState, useEffect, useMemo } from 'react';
import { toast } from 'sonner';
import { useRouter } from 'next/navigation';

interface ServiceItem {
  _id: string;
  name: string;

}

export const Request_form = () => {

  
  const router = useRouter()
  const user = getUserInfo()

  if (!user) {
    toast.error('No user logged in')
    router.push('/')
  }


  const userInfo = useMemo(() => getUserInfo(), []);
  const [loading, setIsLoading] = useState(false);
  const [availableServices, setAvailableServices] = useState<ServiceItem[]>([]);

  const [formData, setFormData] = useState<{
    description: string;
    address: string;
    expiryDate: Date;
    services: string[];
  }>({
    description: '',
    address: '',
    expiryDate: new Date(),
    services: [],
  });



  useEffect(() => {
    const fetchServices = async () => {
      try {
        const res = await fetchAllServices();
        if (!res) throw new Error('Failed to fetch services');
        // const data = await res.json();
        console.log(res, 'ssss')
        setAvailableServices(res?.data);
      } catch (error) {
        console.error('Error fetching services:', error);
        toast.error('Could not load available services');
      }
    };

    fetchServices()

  }, [])


  useEffect(() => {
    if (userInfo) {
      setFormData((prev) => ({
        ...prev,
        address: userInfo.address || '',
      }));
    }
  }, [userInfo]);

  const handleSelect = (value: string) => {
    setFormData((prev) => {
      const services = prev.services.includes(value)
        ? prev.services.filter((service) => service !== value)
        : [...prev.services, value];
      return { ...prev, services };
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    if (!formData.description || !formData.expiryDate || formData.services.length === 0) {
      toast.error('Please fill all required fields');
      setIsLoading(false);
      return;
    }

    try {
      const ServiceData = {
        description: formData.description,
        address: formData.address,
        expireyDate: new Date(formData.expiryDate),
        // expireyDate: formData.expiryDate,
        services: formData.services,
      };

      const response = await createServices(ServiceData);
      if (!response) throw new Error('Submission failed');

      toast.success('Request submitted successfully!');
      setFormData({
        description: '',
        address: '',
        expiryDate: new Date(),
        services: [],
      });
    } catch (error) {
      toast.error('Failed to submit request');
      console.error('Submission error:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const renderSelectedServices = () => {
    if (formData.services.length === 0) return 'Select services...';
    return availableServices
      .filter((service) => formData.services.includes(service._id))
      .map((service) => service.name)
      .join(', ');
  };

  return (
    <div className="flex flex-col gap-10 items-start w-full border-b pb-8 md:border-none md:pb-0">
      <form onSubmit={handleSubmit} className="w-full">
        <div className="flex flex-col gap-4 items-start w-full">
          <h1 className="text-[30px] font-semibold flex items-center gap-2">
            Service <span className="text-primary">Request</span>
            <Link href={'/Services/Prev_Request'}>
              <MoveUpRight className="size-4" />
            </Link>
          </h1>

          <h2 className="text-[17px] text-[#282828] font-medium">Contact Details</h2>

          <div className="grid grid-cols-2 w-full justify-between gap-5 items-center">
            <div className="flex flex-col gap-2">
              <label htmlFor="Name" className="text-[15px] font-medium">Name</label>
              <Input
                value={userInfo?.firstname || ''}
                readOnly
                className="shadow-md shadow-[#00000040] rounded-xl bg-gray-100"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="Email" className="text-[15px] font-medium">Email</label>
              <Input
                value={userInfo?.email || ''}
                readOnly
                className="shadow-md shadow-[#00000040] rounded-xl bg-gray-100"
              />
            </div>
          </div>

          <div className="grid grid-cols-2 w-full justify-between gap-5 items-center">
            <div className="flex flex-col gap-2">
              <label htmlFor="Number" className="text-[15px] font-medium">Mobile Number</label>
              <Input
                value={userInfo?.phone || ''}
                readOnly
                className="shadow-md shadow-[#00000040] rounded-xl bg-gray-100"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="Address" className="text-[15px] font-medium">Address</label>
              <Input
                value={formData.address}
                onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                placeholder="No 26 lokoja asaba"
                className="shadow-md shadow-[#00000040] rounded-xl"
              />
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-2 w-full mt-5">
          <label htmlFor="Service" className="text-[15px] font-medium">Service Description</label>
          <Textarea
            value={formData.description}
            onChange={(e) => setFormData({ ...formData, description: e.target.value })}
            placeholder="Briefly describe request...."
            className="shadow-md shadow-[#00000040] rounded-xl w-full h-[100px]"
          />
        </div>

        <div className="grid grid-cols-2 w-full justify-between gap-5 items-center mt-5">
          <div className="flex flex-col gap-2 w-full">
            <label htmlFor="services" className="text-[15px] font-medium">Services</label>
            <Select onValueChange={handleSelect}>
              <SelectTrigger className="w-full shadow-md shadow-[#00000040] rounded-xl">
                <SelectValue placeholder={renderSelectedServices()} />
              </SelectTrigger>
              <SelectContent className="max-h-60 bg-white overflow-y-auto">
                {availableServices.map((service) => (
                  <SelectItem
                    key={service._id}
                    value={service._id}
                    className={formData.services.includes(service._id) ? 'bg-accent' : ''}
                  >
                    {service.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            <div className="flex flex-wrap gap-2 mt-2">
              {formData.services.map((serviceId) => {
                const service = availableServices.find((s) => s._id === serviceId);
                return service ? (
                  <span key={serviceId} className="px-2 py-1 bg-accent text-xs rounded-full">
                    {service.name}
                  </span>
                ) : null;
              })}
            </div>
          </div>

          <div className="flex flex-col gap-2 w-full">
            <label htmlFor="date" className="text-[15px] font-medium">Due date</label>
            <Input
              type="date"
              value={formData.expiryDate.toISOString().split('T')[0]}
              onChange={(e) => setFormData({ ...formData, expiryDate: new Date(e.target.value) })}
              className="shadow-md shadow-[#00000040] rounded-xl"
            />
          </div>

        </div>

        <div className="flex w-full justify-center mt-6">
          <Button type="submit" className="w-[200px] p-2 rounded-full">
            {loading ? <Loader className="size-4 animate-spin" /> : 'Submit Request'}
          </Button>
        </div>
      </form>
    </div>
  );
};

