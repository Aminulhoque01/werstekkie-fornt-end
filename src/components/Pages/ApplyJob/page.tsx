'use client';

import { useEffect, useState } from 'react';
import { Button, Input, Form, Divider } from 'antd';
import dynamic from 'next/dynamic';
import type { UploadFile } from 'antd/es/upload/interface';
import { useParams } from 'next/navigation';
import { useGetSingleJobQuery } from '@/redux/features/alljobSearch/alljobSearch';

const Upload = dynamic(() => import('antd').then((mod) => mod.Upload), { ssr: false });

export default function JobApplicationForm() {
  const {id} = useParams();
  // console.log("Data", id);

  const { data, error, isLoading } = useGetSingleJobQuery(id);

  const oneData = data?.data?.attributes;
  console.log("Data", oneData);
  const [form] = Form.useForm();
  const [file, setFile] = useState<UploadFile | null>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const handleSubmit = (values: any) => {
    console.log('Form Data:', values);
  };

  return (
    <div className="bg-gray-100 min-h-screen mt-30 pt-20">
      {/* Main Container */}
      <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Job Details Section */}
        <div className="lg:col-span-2 bg-white shadow-md rounded-lg p-6">
          {/* Job Title */}
          <h1 className="text-3xl font-bold text-gray-800 mb-2">
           {oneData?.title}
          </h1>
          <a href="#" className="text-blue-600 hover:underline text-sm mb-4 block">
            <p>{oneData?.company}</p>
          </a>
          {/* Job Tags */}
          <div className="flex items-center gap-2 mb-6">
            <span className="bg-gray-200 text-gray-800 px-3 py-1 rounded-full text-sm">
              <p>workType: {oneData?.workPlace}</p>
            </span>
            <span className="bg-gray-200 text-gray-800 px-3 py-1 rounded-full text-sm">
            <p>jobType: {oneData?.employmentType}</p>
            </span>
            <span className="bg-gray-200 text-gray-800 px-3 py-1 rounded-full text-sm">
           <p>locaton: {oneData?.location}</p>
            </span>
            <span className="bg-gray-200 text-gray-800 px-3 py-1 rounded-full text-sm">
            <p>salary:{oneData?.salary}</p>
            </span>
          </div>
          {/* Job Description */}
          <p className="text-gray-700 mb-6">
           { oneData?.description}
          </p>
          

          <h2 className="text-xl font-bold text-gray-800 mb-4">
            Essential Knowledge, Skills, and Experience
          </h2>
          <ul className="list-disc list-inside space-y-2 text-gray-700 mb-6">
            <li>A portfolio demonstrating well-thought-through and polished end-to-end customer journeys</li>
            <li>5+ years of industry experience in interactive design and/or visual design</li>
            <li>Excellent interpersonal skills</li>
            <li>Proficiency in design tools such as Figma, Photoshop, Illustrator, and Sketch</li>
          </ul>
          <h2 className="text-xl font-bold text-gray-800 mb-4">Preferred Experience</h2>
          <ul className="list-disc list-inside space-y-2 text-gray-700">
            <li>Deeply understand the technology and features of the product</li>
            <li>Provide human and business impact and insights for products</li>
            <li>Ability to create deliverables for user research and usability testing</li>
          </ul>
        </div>

        {/* Application Form Section */}
        <div className="max-w-md mx-auto bg-white p-6 rounded-lg shadow-md">
          <Form form={form} layout="vertical" onFinish={handleSubmit} className="space-y-4">
            <Form.Item name="name" label="Your Name" rules={[{ required: true, message: 'Please enter your full name' }]}>
              <Input placeholder="Full Name" />
            </Form.Item>

            <Form.Item name="email" label="Your Email" rules={[{ required: true, type: 'email', message: 'Please enter a valid email' }]}>
              <Input placeholder="Your Email" />
            </Form.Item>

            <Form.Item name="phone" label="Your Phone Number" rules={[{ required: true, message: 'Please enter your phone number' }]}>
              <Input placeholder="Your Phone Number" />
            </Form.Item>

            <Form.Item name="experience" label="How many years of experience do you have in this Field?" rules={[{ required: true, message: 'Please enter your experience' }]}>
              <Input placeholder="1,2,3" />
            </Form.Item>

            <Form.Item name="fitReason" label="Why are you a good fit for this role?">
              <Input.TextArea placeholder="Write here.." />
            </Form.Item>

            <Form.Item name="coverLetter" label="Write a Cover Letter">
              <Input.TextArea placeholder="Write here.." />
            </Form.Item>

            <Form.Item name="resume" label="Upload Your CV/Resume" rules={[{ required: true, message: 'Please upload your CV/Resume' }]}>
              <Upload beforeUpload={(file) => { setFile(file); return false; }}>
                <Button>Select File</Button>
              </Upload>
            </Form.Item>

            <Button type="primary" htmlType="submit" className="w-full">Apply Now</Button>
          </Form>
        </div>
      </div>
    </div>

  );
}
