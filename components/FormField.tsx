"use client"

import { CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import {
    FormControl,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"

import {
    UseFormReturn,
    Controller,
    FieldValues,
    Path,
    Control,
} from "react-hook-form"

/* -------------------- GENERIC PROPS -------------------- */
interface FormFieldProps<T extends FieldValues> {
    control: Control<T>
    name: Path<T>
    label: string
    placeholder?: string
    type?: "text" | "password" | "email" | "file"
}

/* -------------------- COMPONENT -------------------- */
const FormField = <T extends FieldValues>({
                                              control,
                                              name,
                                              label,
                                              placeholder,
                                              type = "text",
                                          }: FormFieldProps<T>) => (
    <CardContent className="space-y-4">
        <Controller
            name={name}
            control={control}
            render={({ field }) => (
                <FormItem>
                    <FormLabel className="label">{label}</FormLabel>
                    <FormControl>
                        <Input
                            type={type}
                            placeholder={placeholder}
                            value={field.value ?? ""}
                            onChange={field.onChange}
                            onBlur={field.onBlur}
                            ref={field.ref}
                        />

                    </FormControl>
                    <FormMessage />
                </FormItem>
            )}
        />
    </CardContent>
)

export default FormField
