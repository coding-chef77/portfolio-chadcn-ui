import { useForm } from "react-hook-form";
import { Card, CardContent, CardHeader } from "../ui/card";
import {
  useFormField,
  Form,
  FormItem,
  FormLabel,
  FormControl,
  FormDescription,
  FormMessage,
  FormField,
} from "../ui/form";

interface CardWrapperProps {
  title: string;
}

const CardWrapper = ({ title }: CardWrapperProps) => {
  const form = useForm({});

  const onSubmit = () => {
    console.log("submit");
  };

  return (
    <Card>
      <CardHeader>{title}</CardHeader>
      <CardContent>
        {/* <Form {...form}> */}
        {/* <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <div className="space-y-4">
              <FormField control={form.control} name="name" render={} />
            </div>
          </form> */}
        {/* </Form> */}
      </CardContent>
    </Card>
  );
};

export default CardWrapper;
