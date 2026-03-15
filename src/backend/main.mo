import Time "mo:core/Time";
import Text "mo:core/Text";
import List "mo:core/List";
import Runtime "mo:core/Runtime";
import Principal "mo:core/Principal";

actor {
  let studentLeads = List.empty<StudentLead>();
  let channelPartners = List.empty<ChannelPartner>();
  let contactForms = List.empty<ContactForm>();

  type StudentLead = {
    name : Text;
    mobile : Text;
    course : Text;
    city : Text;
    timestamp : Time.Time;
  };

  type ChannelPartner = {
    name : Text;
    company : Text;
    mobile : Text;
    city : Text;
    message : Text;
    timestamp : Time.Time;
  };

  type ContactForm = {
    name : Text;
    mobile : Text;
    email : Text;
    message : Text;
    timestamp : Time.Time;
  };

  let adminId = "ecrt5-wfjc3-od4va-vxu7t-jt6ee-mybcc-hfsgr-hurj4-4lsox-ju3p4-hqe";
  func checkAdmin(caller : Principal) : () {
    if (caller.toText() != adminId) {
      Runtime.trap("Not authorized");
    };
  };

  public shared ({ caller }) func submitStudentLead(name : Text, mobile : Text, course : Text, city : Text) : async () {
    let lead : StudentLead = {
      name;
      mobile;
      course;
      city;
      timestamp = Time.now();
    };
    studentLeads.add(lead);
  };

  public shared ({ caller }) func submitChannelPartner(name : Text, company : Text, mobile : Text, city : Text, message : Text) : async () {
    let partner : ChannelPartner = {
      name;
      company;
      mobile;
      city;
      message;
      timestamp = Time.now();
    };
    channelPartners.add(partner);
  };

  public shared ({ caller }) func submitContactForm(name : Text, mobile : Text, email : Text, message : Text) : async () {
    let form : ContactForm = {
      name;
      mobile;
      email;
      message;
      timestamp = Time.now();
    };
    contactForms.add(form);
  };

  public shared ({ caller }) func getStudentLeads() : async [StudentLead] {
    checkAdmin(caller);
    studentLeads.toArray();
  };

  public shared ({ caller }) func getChannelPartners() : async [ChannelPartner] {
    checkAdmin(caller);
    channelPartners.toArray();
  };

  public shared ({ caller }) func getContactForms() : async [ContactForm] {
    checkAdmin(caller);
    contactForms.toArray();
  };
};
