import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { insertInquirySchema } from "@shared/schema";
import { z } from "zod";
import { useContactMutation } from "@/hooks/use-portfolio";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Loader2, Send } from "lucide-react";

type FormValues = z.infer<typeof insertInquirySchema>;

export function ContactForm() {
  const mutation = useContactMutation();
  const form = useForm<FormValues>({
    resolver: zodResolver(insertInquirySchema),
    defaultValues: {
      name: "",
      email: "",
      message: ""
    }
  });

  function onSubmit(data: FormValues) {
    mutation.mutate(data, {
      onSuccess: () => form.reset()
    });
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="uppercase text-xs font-bold tracking-wider text-muted-foreground">Full Name</FormLabel>
                <FormControl>
                  <Input placeholder="John Doe" className="h-12 bg-white/50 border-border focus:border-accent focus:ring-accent/20 transition-all" {...field} />
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
                <FormLabel className="uppercase text-xs font-bold tracking-wider text-muted-foreground">Email Address</FormLabel>
                <FormControl>
                  <Input placeholder="john@company.com" className="h-12 bg-white/50 border-border focus:border-accent focus:ring-accent/20 transition-all" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        
        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="uppercase text-xs font-bold tracking-wider text-muted-foreground">Message</FormLabel>
              <FormControl>
                <Textarea 
                  placeholder="How can I help you?" 
                  className="min-h-[150px] resize-none bg-white/50 border-border focus:border-accent focus:ring-accent/20 transition-all" 
                  {...field} 
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button 
          type="submit" 
          disabled={mutation.isPending}
          className="w-full h-12 text-base font-semibold bg-primary hover:bg-primary/90 transition-all shadow-lg shadow-primary/20"
        >
          {mutation.isPending ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Sending...
            </>
          ) : (
            <>
              Send Message
              <Send className="ml-2 h-4 w-4" />
            </>
          )}
        </Button>
      </form>
    </Form>
  );
}
