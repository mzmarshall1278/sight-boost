"use client";

import React, { useEffect, useState } from 'react';
import { CldUploadButton, CloudinaryUploadWidgetResults } from 'next-cloudinary';
import Image from 'next/image';
import { imageOptions } from '../../../../utils/rawData';
import SuccessModal from './SuccessModal';
import ErrorModal from './ErrorModal';
import { useRouter } from 'next/navigation';

  
const Form = () => {
    const [imageId, setImageId] = useState<string | null>(null);
    const [submitting, setIsSubmitting] = useState(false);
    const [successMsg, setSuccessMsg] = useState("");
    const [errorMsg, setErrorMsg] = useState("");
    const [formData, setFormData] = useState({
        imageCategory: "",
        imageUrl: "",
    });

    const router = useRouter()

    const type = 'submit';
    
    const handleCategoryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setFormData({
            ...formData,
            imageCategory: e.target.value,
        });
        console.log(e.target.value, 'e.target.value');
        
    };
    const handleUpload = (results: CloudinaryUploadWidgetResults | any) => {
        if (results.event === 'success' && results.info) {
            setImageId(results.info.secure_url);
            setFormData({
                ...formData,
                imageUrl: results.info.secure_url,
            });
        }
    };


    const handleSubmit = async (e: any) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSuccessMsg('');
        setErrorMsg('');
  
        try {
            const response = await fetch('/api/images/new', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });
    
            if (response.ok) {
                const data = await response.json();
                console.log('Course created successfully:', data);
                setSuccessMsg(data?.message);
                router.push('/gallery')
            } else {
                const errorData = await response.json();
                console.error('Failed to create a new course:', errorData);
                setErrorMsg(errorData?.message || 'An error occurred');
            }
            
        } catch (error) {
          console.error('Error saving image', error);
        } finally {
          setIsSubmitting(false);
        }
    };
  
    return (
        <section className="md:w-full w-[70%] flex justify-center mx-auto my-12">
            <form 
                className="mt-10 w-full max-w-2xl flex flex-col gap-7 glassmorphism" 
                onSubmit={handleSubmit}
            >
                    <div>
                        <label className="md:text-center text-left block text-xl mb-4 font-semibold text-teal-900">
                            <span className="text-red-600">*</span>
                            Select Image Category
                        </label>
                        <select
                            value={formData.imageCategory}
                            onChange={handleCategoryChange}
                            required
                            className='w-full py-2 px-4 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring focus:border-blue-500'
                        >
                            <option value="" disabled className='cursor-not-allowed'>Select a Category</option>
                            {imageOptions.map(option => (
                            <option className=' ' key={option.value} value={option.value}>{option.label}</option>
                            ))}
                        </select>
                        </div>
                <label className="flex flex-col w-full items-center justify-center mx-auto border-2 rounded-xl bg-teal-900 p-4">
                    <span className="font-satoshi text-base text-white font-bold mb-4">
                        Upload Image{' '}
                    </span>

                    <CldUploadButton
                    className=' cursor-pointer w-fit px-4 py-2 text-xl bg-black hover:bg-white hover:text-gray-700 border border-primary-orange rounded-md text-white'
                        uploadPreset="miva-test"
                        onSuccess={handleUpload}
                    />

                    {imageId && (
                        <div className="rounded-lg overflow-hidden size-full md:w-[20rem] h-[20rem] relative mt-4">
                            <Image src={imageId} fill alt="image" className="object-contain rounded-lg" />
                        </div>
                    )}
                </label>
                {formData.imageCategory !== '' && formData.imageUrl !== '' && (
                    <button
                        type='submit'
                        disabled={submitting}
                        className='px-5 py-2 text-lg bg-teal-900 rounded-full text-white w-full md:w-2/3 mx-auto'
                    >
                        {submitting ? `${type}ing...` : type}
                    </button>
                )}

                <span>
                    {successMsg && <SuccessModal msg={successMsg} />}
                    {errorMsg && <ErrorModal msg={errorMsg} />}          
                </span>
            </form>
        </section>
    );
};

export default Form;
