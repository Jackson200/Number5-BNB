import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { apiRequest } from '@/lib/queryClient';
import { useToast } from '@/hooks/use-toast';

const formSchema = z.object({
  name: z.string().min(2, { message: 'Name must be at least 2 characters' }),
  email: z.string().email({ message: 'Please enter a valid email address' }),
  subject: z.string().min(1, { message: 'Please select a subject' }),
  message: z.string().min(10, { message: 'Message must be at least 10 characters' }),
});

type FormValues = z.infer<typeof formSchema>;

const ContactForm: React.FC = () => {
  const { toast } = useToast();
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      email: '',
      subject: '',
      message: '',
    },
  });

  const onSubmit = async (data: FormValues) => {
    try {
      const response = await apiRequest('POST', '/api/contact', data);
      console.log('Contact form submission successful:', response);
      
      toast({
        title: 'Message sent',
        description: 'Your message has been sent successfully. We will get back to you soon.',
        variant: 'default',
      });
      form.reset();
    } catch (error: any) {
      console.error('Contact form submission error:', error);
      
      // Extract error message if available
      const errorMessage = error?.response?.data?.message || 
                          error?.response?.data?.error || 
                          error?.message || 
                          'There was an error sending your message';
      
      toast({
        title: 'Error',
        description: `${errorMessage}. Please try again.`,
        variant: 'destructive',
      });
    }
  };

  return (
    <div className="bg-[#F1FAEE] rounded-lg shadow-md p-6">
      <h3 className="text-2xl font-bold mb-6 font-['Playfair_Display'] text-primary">Send Us a Message</h3>
      
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="block text-sm font-bold mb-2">Your Name</FormLabel>
                <FormControl>
                  <Input {...field} className="w-full p-3 border border-gray-300 rounded-md" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="block text-sm font-bold mb-2">Email Address</FormLabel>
                <FormControl>
                  <Input {...field} type="email" className="w-full p-3 border border-gray-300 rounded-md" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          
          <FormField
            control={form.control}
            name="subject"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="block text-sm font-bold mb-2">Subject</FormLabel>
                <Select 
                  onValueChange={field.onChange} 
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger className="w-full p-3 border border-gray-300 rounded-md">
                      <SelectValue placeholder="Select a subject" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="booking">Booking Inquiry</SelectItem>
                    <SelectItem value="nw200">NW200 Accommodation</SelectItem>
                    <SelectItem value="special-request">Special Request</SelectItem>
                    <SelectItem value="feedback">Feedback</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
          
          <FormField
            control={form.control}
            name="message"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="block text-sm font-bold mb-2">Your Message</FormLabel>
                <FormControl>
                  <Textarea 
                    {...field} 
                    rows={4} 
                    className="w-full p-3 border border-gray-300 rounded-md" 
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          
          <Button 
            type="submit" 
            className="w-full bg-primary hover:bg-primary/90 text-white py-3 rounded-md font-bold transition duration-150"
            disabled={form.formState.isSubmitting}
          >
            {form.formState.isSubmitting ? 'Sending...' : 'Send Message'}
          </Button>
        </form>
      </Form>
    </div>
  );
};

export default ContactForm;
