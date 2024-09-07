import React from "react";
import { format } from 'date-fns';

interface EmailTemplateProps {
    firstName: string;
    doctorName: string;
    datetime: Date;
    status: string;
}

const EmailTemplate = ({ firstName, doctorName, datetime, status }: EmailTemplateProps) => {
    const formattedDate = format(datetime, 'EEEE, MMMM do, yyyy h:mm a');

    return (
        <div style={{ fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif", lineHeight: '1.6', color: '#000', padding: '20px', maxWidth: '600px', margin: '0 auto', backgroundColor: '#e0f2f1', borderRadius: '8px', border: '1px solid #004d40' }}>
            <div style={{ padding: '20px', backgroundColor: '#004d40', borderTopLeftRadius: '8px', borderTopRightRadius: '8px', color: '#fff', textAlign: 'center' }}>
                <h1 style={{ fontSize: '28px', margin: '0' }}>Appointment Received</h1>
            </div>
            
            <div style={{ padding: '20px' }}>
                <p style={{ fontSize: '18px', marginBottom: '20px' }}>Dear <strong>{firstName}</strong>,</p>

                <p style={{ fontSize: '16px', marginBottom: '20px' }}>
                    We have received your appointment request with <strong>Dr. {doctorName}</strong>. Below are the details of your appointment:
                </p>

                <div style={{ margin: '20px 0', padding: '20px', backgroundColor: '#a7ffeb', borderRadius: '8px', border: '1px solid #00796b', boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)' }}>
                    <p style={{ margin: '5px 0', fontSize: '16px' }}><strong>Date & Time:</strong> {formattedDate}</p>
                    <p style={{ margin: '5px 0', fontSize: '16px' }}><strong>Doctor:</strong> Dr. {doctorName}</p>
                    <p style={{ margin: '5px 0', fontSize: '16px' }}><strong>Status:</strong> {status}</p>
                </div>

                <p style={{ fontSize: '16px', marginBottom: '20px' }}>
                    Your appointment is currently <strong>{status.toLowerCase()}</strong>. We will confirm the details shortly and notify you once everything is finalized.
                </p>

                <p style={{ fontSize: '16px', marginBottom: '40px' }}>
                    Please ensure you arrive at least 10 minutes before your scheduled time. If you need to reschedule or cancel your appointment, kindly contact us at least 24 hours in advance.
                </p>

                <p style={{ fontSize: '16px', fontWeight: 'bold', color: '#004d40', textAlign: 'center', marginBottom: '0' }}>Best Regards,</p>
                <p style={{ fontSize: '16px', fontWeight: 'bold', color: '#00796b', textAlign: 'center', marginTop: '5px' }}>The Acme Healthcare Team</p>
            </div>

            <div style={{ padding: '20px', backgroundColor: '#004d40', borderBottomLeftRadius: '8px', borderBottomRightRadius: '8px' }}>
                <hr style={{ margin: '0 0 20px 0', border: 'none', borderTop: '1px solid #00796b' }} />

                <p style={{ fontSize: '12px', color: '#fff', textAlign: 'center', marginBottom: '0' }}>
                    This is an automated message, please do not reply. If you have any questions, feel free to contact us at <a href="mailto:support@acmehealthcare.com" style={{ color: '#a7ffeb', textDecoration: 'none' }}>support@acmehealthcare.com</a>.
                </p>
            </div>
        </div>
    );
};

export default EmailTemplate;
