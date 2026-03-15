import type { Principal } from "@icp-sdk/core/principal";
export interface Some<T> {
    __kind__: "Some";
    value: T;
}
export interface None {
    __kind__: "None";
}
export type Option<T> = Some<T> | None;
export interface StudentLead {
    city: string;
    name: string;
    timestamp: Time;
    mobile: string;
    course: string;
}
export interface ChannelPartner {
    city: string;
    name: string;
    company: string;
    message: string;
    timestamp: Time;
    mobile: string;
}
export type Time = bigint;
export interface ContactForm {
    name: string;
    email: string;
    message: string;
    timestamp: Time;
    mobile: string;
}
export interface backendInterface {
    getChannelPartners(): Promise<Array<ChannelPartner>>;
    getContactForms(): Promise<Array<ContactForm>>;
    getStudentLeads(): Promise<Array<StudentLead>>;
    submitChannelPartner(name: string, company: string, mobile: string, city: string, message: string): Promise<void>;
    submitContactForm(name: string, mobile: string, email: string, message: string): Promise<void>;
    submitStudentLead(name: string, mobile: string, course: string, city: string): Promise<void>;
}
