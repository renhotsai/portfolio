interface ContactEmailData {
  name: string;
  email: string;
  message: string;
}

export const getContactEmailTemplate = ({ name, email, message }: ContactEmailData) => {
  return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>New Contact Form Message</title>
      <style>
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }
        body {
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif;
          line-height: 1.6;
          color: #333;
          background-color: #f8fafc;
        }
        .container {
          max-width: 600px;
          margin: 20px auto;
          background: #ffffff;
          border-radius: 12px;
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
          overflow: hidden;
        }
        .header {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          color: white;
          padding: 30px;
          text-align: center;
        }
        .header h1 {
          font-size: 24px;
          font-weight: 600;
          margin-bottom: 8px;
        }
        .header p {
          opacity: 0.9;
          font-size: 14px;
        }
        .content {
          padding: 30px;
        }
        .section {
          margin-bottom: 25px;
        }
        .section-title {
          font-size: 16px;
          font-weight: 600;
          color: #374151;
          margin-bottom: 8px;
          display: flex;
          align-items: center;
        }
        .icon {
          width: 20px;
          height: 20px;
          margin-right: 8px;
          display: inline-block;
        }
        .info-card {
          background: #f8fafc;
          border: 1px solid #e2e8f0;
          border-radius: 8px;
          padding: 16px;
          margin-bottom: 16px;
        }
        .sender-info {
          display: flex;
          align-items: center;
          gap: 12px;
        }
        .avatar {
          width: 48px;
          height: 48px;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          font-weight: 600;
          font-size: 18px;
        }
        .sender-details h3 {
          font-size: 18px;
          font-weight: 600;
          color: #1f2937;
          margin-bottom: 4px;
        }
        .sender-details a {
          color: #667eea;
          text-decoration: none;
          font-size: 14px;
        }
        .sender-details a:hover {
          text-decoration: underline;
        }
        .message-content {
          background: #ffffff;
          border: 1px solid #e2e8f0;
          border-radius: 8px;
          padding: 20px;
          white-space: pre-wrap;
          line-height: 1.7;
          font-size: 15px;
          color: #374151;
        }
        .footer {
          background: #f8fafc;
          padding: 20px 30px;
          border-top: 1px solid #e2e8f0;
          text-align: center;
        }
        .footer p {
          font-size: 12px;
          color: #6b7280;
          margin-bottom: 8px;
        }
        .footer .badge {
          display: inline-block;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          color: white;
          padding: 4px 12px;
          border-radius: 20px;
          font-size: 11px;
          font-weight: 500;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }
        .divider {
          height: 1px;
          background: linear-gradient(90deg, transparent, #e2e8f0, transparent);
          margin: 25px 0;
        }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <div style="font-size: 48px; margin-bottom: 16px;">
            <svg viewBox="0 0 24 24" fill="currentColor" style="width: 48px; height: 48px; color: white;">
              <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
            </svg>
          </div>
          <h1>New Contact Message</h1>
          <p>Someone reached out through your portfolio website</p>
        </div>
        
        <div class="content">
          <div class="section">
            <div class="section-title">
              <svg class="icon" viewBox="0 0 24 24" fill="currentColor" style="width: 20px; height: 20px; margin-right: 8px; display: inline-block;">
                <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
              </svg>
              Message From
            </div>
            <div class="info-card">
              <div class="sender-info">
                <div class="avatar">
                  ${name.charAt(0).toUpperCase()}
                </div>
                <div class="sender-details">
                  <h3>${name}</h3>
                  <a href="mailto:${email}">${email}</a>
                </div>
              </div>
            </div>
          </div>

          <div class="divider"></div>

          <div class="section">
            <div class="section-title">
              <svg class="icon" viewBox="0 0 24 24" fill="currentColor" style="width: 20px; height: 20px; margin-right: 8px; display: inline-block;">
                <path d="M20 2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h4l4 4 4-4h4c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2z"/>
              </svg>
              Message Content
            </div>
            <div class="message-content">${message}</div>
          </div>
        </div>
        
        <div class="footer">
          <p>This message was sent from your portfolio contact form</p>
          <span class="badge">Jeremy Tsai Portfolio</span>
        </div>
      </div>
    </body>
    </html>
  `;
};

export const getConfirmationEmailTemplate = ({ name }: { name: string }) => {
  return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Message Received - Thank You!</title>
      <style>
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }
        body {
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif;
          line-height: 1.6;
          color: #333;
          background-color: #f8fafc;
        }
        .container {
          max-width: 600px;
          margin: 20px auto;
          background: #ffffff;
          border-radius: 12px;
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
          overflow: hidden;
        }
        .header {
          background: linear-gradient(135deg, #10b981 0%, #059669 100%);
          color: white;
          padding: 40px 30px;
          text-align: center;
        }
        .header .icon {
          font-size: 48px;
          margin-bottom: 16px;
        }
        .header h1 {
          font-size: 28px;
          font-weight: 600;
          margin-bottom: 8px;
        }
        .header p {
          opacity: 0.9;
          font-size: 16px;
        }
        .content {
          padding: 40px 30px;
          text-align: center;
        }
        .greeting {
          font-size: 20px;
          color: #1f2937;
          margin-bottom: 20px;
        }
        .message {
          font-size: 16px;
          color: #6b7280;
          line-height: 1.7;
          margin-bottom: 30px;
        }
        .cta-section {
          background: #f8fafc;
          border-radius: 12px;
          padding: 30px;
          margin: 30px 0;
          border: 1px solid #e2e8f0;
        }
        .cta-title {
          font-size: 18px;
          font-weight: 600;
          color: #1f2937;
          margin-bottom: 12px;
        }
        .cta-text {
          color: #6b7280;
          margin-bottom: 20px;
        }
        .social-links {
          display: flex;
          justify-content: center;
          gap: 16px;
          flex-wrap: wrap;
        }
        .social-link {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 10px 16px;
          background: #ffffff;
          border: 1px solid #e2e8f0;
          border-radius: 8px;
          text-decoration: none;
          color: #374151;
          font-size: 14px;
          font-weight: 500;
          transition: all 0.2s;
        }
        .social-link:hover {
          background: #f3f4f6;
          transform: translateY(-1px);
        }
        .footer {
          background: #f8fafc;
          padding: 30px;
          border-top: 1px solid #e2e8f0;
          text-align: center;
        }
        .footer p {
          font-size: 14px;
          color: #6b7280;
          margin-bottom: 12px;
        }
        .signature {
          font-size: 16px;
          color: #1f2937;
          font-weight: 500;
        }
        .divider {
          height: 1px;
          background: linear-gradient(90deg, transparent, #e2e8f0, transparent);
          margin: 30px 0;
        }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <div style="font-size: 48px; margin-bottom: 16px;">
            <svg viewBox="0 0 24 24" fill="currentColor" style="width: 48px; height: 48px; color: white;">
              <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
            </svg>
          </div>
          <h1>Message Received!</h1>
          <p>Thank you for reaching out</p>
        </div>
        
        <div class="content">
          <div class="greeting">Hi ${name}! 
            <span style="font-size: 20px; margin-left: 8px;">👋</span>
          </div>
          
          <div class="message">
            Thank you for contacting me through my portfolio website. I've received your message and really appreciate you taking the time to reach out.
            <br><br>
            I'll review your message carefully and get back to you as soon as possible, typically within 24-48 hours.
          </div>

          <div class="cta-section">
            <div class="cta-title">Connect with me on social media</div>
            <div class="cta-text">While you wait for my response, feel free to connect with me on these platforms:</div>
            
            <div class="social-links">
              <a href="https://github.com/renhotsai" class="social-link">
                <svg viewBox="0 0 24 24" fill="currentColor" style="width: 16px; height: 16px; margin-right: 6px;">
                  <path d="M12 0C5.374 0 0 5.373 0 12 0 17.302 3.438 21.8 8.207 23.387c.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
                </svg>
                GitHub
              </a>
              <a href="https://www.linkedin.com/in/renho-tsai/" class="social-link">
                <svg viewBox="0 0 24 24" fill="currentColor" style="width: 16px; height: 16px; margin-right: 6px;">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
                LinkedIn
              </a>
              <a href="mailto:renhotsai@gmail.com" class="social-link">
                <svg viewBox="0 0 24 24" fill="currentColor" style="width: 16px; height: 16px; margin-right: 6px;">
                  <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                </svg>
                Email
              </a>
            </div>
          </div>

          <div class="divider"></div>
          
          <div class="message">
            Looking forward to our conversation!
          </div>
        </div>
        
        <div class="footer">
          <p>This is an automated confirmation email from Jeremy Tsai's portfolio website.</p>
          <div class="signature">Best regards,<br><strong>Jeremy Tsai</strong></div>
        </div>
      </div>
    </body>
    </html>
  `;
};