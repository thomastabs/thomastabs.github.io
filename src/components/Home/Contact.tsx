
import React, { useState } from 'react';
import { Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useIsMobile } from '@/hooks/use-mobile';
import { Facebook, Twitter, Instagram, Github, Linkedin } from 'lucide-react';
import emailjs from 'emailjs-com';
import { toast } from '@/components/ui/use-toast';

const Contact = () => {
  const [formStatus, setFormStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const isMobile = useIsMobile();
  
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormStatus('loading');
    
    const form = e.target as HTMLFormElement;
    const formData = new FormData(form);
    const templateParams = {
      name: formData.get('name'),
      email: formData.get('email'),
      message: formData.get('message'),
      to_email: 'tomassantostaborda@gmail.com, tomassantostaborda@tecnico.ulisboa.pt'
    };
    
    try {
      // Replace these with your actual EmailJS service ID, template ID, and user ID
      await emailjs.send(
        'service_contact_form', // replace with your service ID
        'template_contact_form', // replace with your template ID
        templateParams,
        'your_user_id' // replace with your user ID
      );
      
      setFormStatus('success');
      toast({
        title: "Message sent!",
        description: "Your message has been successfully sent.",
      });
      form.reset();
      
      // Reset status after showing success message
      setTimeout(() => setFormStatus('idle'), 3000);
    } catch (error) {
      console.error('Error sending email:', error);
      setFormStatus('error');
      toast({
        title: "Error",
        description: "Failed to send your message. Please try again.",
        variant: "destructive",
      });
      setTimeout(() => setFormStatus('idle'), 3000);
    }
  };
  
  return (
    <section id="contact" className="bg-muted/20 py-20">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-16">Contact Me</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="space-y-8">
            <h3 className="text-2xl font-medium mb-6">Get In Touch</h3>
            <div className="space-y-4">
              <div className={`flex ${isMobile ? 'flex-col space-y-1' : 'items-center space-x-4'}`}>
                <Mail className="h-5 w-5 text-primary shrink-0" />
                <span className="text-muted-foreground select-all break-words">tomassantostaborda@gmail.com</span>
              </div>
              
              <div className={`flex ${isMobile ? 'flex-col space-y-1' : 'items-center space-x-4'}`}>
                <Mail className="h-5 w-5 text-primary shrink-0" />
                <span className="text-muted-foreground select-all break-words">tomassantostaborda@tecnico.ulisboa.pt</span>
              </div>
            </div>
            
            <div className="space-y-4">
              <h4 className="text-lg font-medium">Find Me On</h4>
              <div className="flex flex-wrap gap-4">
                <a href="https://www.facebook.com/profile.php?id=100007571926646" target="_blank" rel="noopener noreferrer" 
                   className="bg-background p-3 rounded-full hover:bg-primary/10 transition-colors">
                  <Facebook className="h-6 w-6" />
                  <span className="sr-only">Facebook</span>
                </a>
                <a href="https://twitter.com/TorradaDoMato" target="_blank" rel="noopener noreferrer" 
                   className="bg-background p-3 rounded-full hover:bg-primary/10 transition-colors">
                  <Twitter className="h-6 w-6" />
                  <span className="sr-only">Twitter</span>
                </a>
                <a href="https://www.instagram.com/_tomas_esteve_aqui_/" target="_blank" rel="noopener noreferrer" 
                   className="bg-background p-3 rounded-full hover:bg-primary/10 transition-colors">
                  <Instagram className="h-6 w-6" />
                  <span className="sr-only">Instagram</span>
                </a>
                <a href="https://github.com/thomastabs" target="_blank" rel="noopener noreferrer" 
                   className="bg-background p-3 rounded-full hover:bg-primary/10 transition-colors">
                  <Github className="h-6 w-6" />
                  <span className="sr-only">Github</span>
                </a>
                <a href="https://www.linkedin.com/in/tomas-taborda" target="_blank" rel="noopener noreferrer" 
                   className="bg-background p-3 rounded-full hover:bg-primary/10 transition-colors">
                  <Linkedin className="h-6 w-6" />
                  <span className="sr-only">LinkedIn</span>
                </a>
              </div>
              
              <div className="mt-8">
                <Button asChild variant="outline" className="rounded-full">
                  <a href="/Content/images/TomasTaborda.pdf" download>
                    Download CV
                  </a>
                </Button>
              </div>
            </div>
          </div>
          
          <div className="bg-background/50 backdrop-blur-sm rounded-lg p-6 shadow-lg border border-border/50">
            <h3 className="text-2xl font-medium mb-6">Send Me a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">
                    Your Name
                  </label>
                  <Input 
                    id="name" 
                    name="name"
                    placeholder="John Doe" 
                    required 
                    className="bg-background/50"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    Your Email
                  </label>
                  <Input 
                    id="email" 
                    name="email"
                    type="email" 
                    placeholder="john@example.com" 
                    required 
                    className="bg-background/50"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Message
                  </label>
                  <Textarea 
                    id="message" 
                    name="message"
                    placeholder="Your message here..." 
                    required 
                    className="bg-background/50 min-h-32"
                  />
                </div>
              </div>
              
              <Button 
                type="submit" 
                className="w-full rounded-full"
                disabled={formStatus === 'loading'}
              >
                {formStatus === 'loading' ? 'Sending...' : 'Send Message'}
              </Button>
              
              {formStatus === 'success' && (
                <p className="text-green-500 text-center">Message sent successfully!</p>
              )}
              
              {formStatus === 'error' && (
                <p className="text-red-500 text-center">Failed to send message. Please try again.</p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
