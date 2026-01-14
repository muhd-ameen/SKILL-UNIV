import { SEO } from "@/components/SEO";

export default function TermsOfService() {
  return (
    <div className="min-h-screen bg-background">
      <SEO 
        title="Terms of Service"
        canonicalUrl="/terms-of-service"
        description="Skill Univ's Terms of Service. Read our terms and conditions governing the use of our educational services and website."
        keywords="terms of service, terms and conditions, user agreement, skill univ terms"
      />
      
      {/* Header */}
      <div className="bg-[#252422] text-white py-12 md:py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl md:text-5xl font-bold text-white">Terms of Service</h1>
          <p className="text-white/70 mt-4">Last updated: January 2026</p>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="max-w-4xl mx-auto prose prose-lg dark:prose-invert prose-headings:text-foreground prose-p:text-muted-foreground">
          
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-foreground mb-4">1. Agreement to Terms</h2>
            <p className="text-muted-foreground mb-4">
              By accessing or using the services provided by Skill Univ ("Company," "we," "us," or "our"), you agree to be bound by these Terms of Service ("Terms"). If you disagree with any part of the terms, you may not access our services.
            </p>
            <p className="text-muted-foreground">
              These Terms apply to all visitors, users, students, and others who access or use our website and educational services.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-foreground mb-4">2. Educational Services</h2>
            <p className="text-muted-foreground mb-4">Skill Univ provides educational programs and training services including but not limited to:</p>
            <ul className="list-disc pl-6 text-muted-foreground space-y-2">
              <li>Professional skill development courses</li>
              <li>Technical training programs</li>
              <li>Career counseling and placement assistance</li>
              <li>Online and offline learning resources</li>
              <li>Mentorship and coaching sessions</li>
            </ul>
            <p className="text-muted-foreground mt-4">
              We reserve the right to modify, suspend, or discontinue any part of our services at any time without prior notice.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-foreground mb-4">3. Enrollment and Registration</h2>
            <p className="text-muted-foreground mb-4">To enroll in our programs, you must:</p>
            <ul className="list-disc pl-6 text-muted-foreground space-y-2">
              <li>Be at least 16 years of age or have parental/guardian consent</li>
              <li>Provide accurate and complete registration information</li>
              <li>Maintain the security of your account credentials</li>
              <li>Notify us immediately of any unauthorized use of your account</li>
              <li>Accept responsibility for all activities that occur under your account</li>
            </ul>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-foreground mb-4">4. Payment Terms</h2>
            <p className="text-muted-foreground mb-4">By enrolling in our paid programs, you agree to the following:</p>
            <ul className="list-disc pl-6 text-muted-foreground space-y-2">
              <li><strong>Fees:</strong> All program fees are as stated at the time of enrollment and are subject to change.</li>
              <li><strong>Payment:</strong> Full payment or agreed installment amounts must be made as per the payment schedule.</li>
              <li><strong>Taxes:</strong> All fees are exclusive of applicable taxes unless otherwise stated.</li>
              <li><strong>Late Payments:</strong> Late payments may result in suspension of access to services.</li>
            </ul>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-foreground mb-4">5. Refund Policy</h2>
            <p className="text-muted-foreground mb-4">Our refund policy is as follows:</p>
            <ul className="list-disc pl-6 text-muted-foreground space-y-2">
              <li><strong>Before Program Start:</strong> Full refund minus a 10% administrative fee if requested at least 7 days before the program starts.</li>
              <li><strong>Within First Week:</strong> 50% refund if requested within the first 7 days of the program.</li>
              <li><strong>After First Week:</strong> No refunds will be provided after the first week of the program.</li>
              <li><strong>Special Circumstances:</strong> Refund requests for medical or emergency situations will be reviewed on a case-by-case basis.</li>
            </ul>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-foreground mb-4">6. Code of Conduct</h2>
            <p className="text-muted-foreground mb-4">As a student or user of our services, you agree to:</p>
            <ul className="list-disc pl-6 text-muted-foreground space-y-2">
              <li>Treat all instructors, staff, and fellow students with respect</li>
              <li>Not engage in any form of harassment, discrimination, or bullying</li>
              <li>Not share or distribute course materials without authorization</li>
              <li>Submit original work and not engage in plagiarism or cheating</li>
              <li>Attend scheduled sessions and complete assignments on time</li>
              <li>Not use our services for any illegal or unauthorized purpose</li>
            </ul>
            <p className="text-muted-foreground mt-4">
              Violation of the code of conduct may result in suspension or termination of your enrollment without refund.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-foreground mb-4">7. Intellectual Property</h2>
            <p className="text-muted-foreground mb-4">
              All content, materials, and resources provided through our services are the property of Skill Univ or our licensors and are protected by intellectual property laws. You may not:
            </p>
            <ul className="list-disc pl-6 text-muted-foreground space-y-2">
              <li>Copy, reproduce, or distribute course materials without written permission</li>
              <li>Record or screen-capture live sessions without authorization</li>
              <li>Use our trademarks, logos, or branding without consent</li>
              <li>Create derivative works from our content</li>
              <li>Sell or commercially exploit our materials</li>
            </ul>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-foreground mb-4">8. Placement Assistance Disclaimer</h2>
            <p className="text-muted-foreground">
              While we provide placement assistance and career support, we do not guarantee employment or specific job placements. Success in securing employment depends on various factors including market conditions, individual performance, and skills acquired. Our hiring rate statistics are based on historical data and do not constitute a guarantee of future results.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-foreground mb-4">9. Limitation of Liability</h2>
            <p className="text-muted-foreground">
              To the maximum extent permitted by law, Skill Univ shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including but not limited to loss of profits, data, use, or other intangible losses, resulting from your use or inability to use our services. Our total liability shall not exceed the amount paid by you for the specific program or service in question.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-foreground mb-4">10. Indemnification</h2>
            <p className="text-muted-foreground">
              You agree to indemnify, defend, and hold harmless Skill Univ and its officers, directors, employees, agents, and affiliates from any claims, liabilities, damages, losses, and expenses arising from your use of our services or violation of these Terms.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-foreground mb-4">11. Modifications to Terms</h2>
            <p className="text-muted-foreground">
              We reserve the right to modify these Terms at any time. We will notify users of any material changes by posting the updated Terms on our website and updating the "Last updated" date. Your continued use of our services after such modifications constitutes acceptance of the updated Terms.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-foreground mb-4">12. Governing Law</h2>
            <p className="text-muted-foreground">
              These Terms shall be governed by and construed in accordance with the laws of India. Any disputes arising from these Terms or your use of our services shall be subject to the exclusive jurisdiction of the courts in Bangalore, Karnataka, India.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-foreground mb-4">13. Severability</h2>
            <p className="text-muted-foreground">
              If any provision of these Terms is found to be unenforceable or invalid, that provision shall be limited or eliminated to the minimum extent necessary, and the remaining provisions shall continue in full force and effect.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-foreground mb-4">14. Contact Information</h2>
            <p className="text-muted-foreground mb-4">
              For any questions regarding these Terms of Service, please contact us:
            </p>
            <div className="bg-muted/30 p-6 rounded-xl">
              <p className="text-foreground font-semibold">Skill Univ</p>
              <p className="text-muted-foreground">Koramangala, 5th Block</p>
              <p className="text-muted-foreground">Bangalore, Karnataka 560095</p>
              <p className="text-muted-foreground">Email: shyamjith@theskilluniv.com</p>
              <p className="text-muted-foreground">Phone: +91 96266 64792</p>
            </div>
          </section>

        </div>
      </div>
    </div>
  );
}
