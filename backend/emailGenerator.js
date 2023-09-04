function generateEmail(data) {
    const listeningScore = parseFloat(data.listeningScore);
    const readingScore = parseFloat(data.readingScore);
    const speakingScore = parseFloat(data.speakingScore);
    const writingScore = parseFloat(data.writingScore);
    const averageScore = (listeningScore + readingScore + speakingScore + writingScore) / 4;
  return `
Hi ${data.fullName},

Thanks for using our free SOP drafting service! Your SOP is attached below.

If you would like further help as follows:

    1. Get a complete statement of purpose framed/reviewed by our experts - Buy it here:
    https://effizient-immigration-inc.square.site/product/sop/9?cp=true&sa=true&sbp=fals
    e&q=false

    2. Get your visa application reviewed before submission to IRCC

Feel free to contact us!

226-774-9168
info@effizient.ca
www.effizieint.ca

We will get you going with your visa application in no time. This will all be remote, which
means you won’t have any hassle at all!

Best Regards,
Team Effizient























From
${data.fullName}
(Address)
${data.email}
To
Visa Officer
High Commission of Canada
Subject: Statement of Purpose for studying in Canada
Dear Sir/Madam,

I would like to take this opportunity to introduce myself as ${data.fullName}, a passionate individual
with a strong desire to pursue a career in the field of technology. This passion and love for
technology led me to pursue a ${data.highestEducation} in Engineering ${data.study} from a reputed
institution in India.

Why B.Tech at India?

As I considered my alternatives for higher education, the B.Tech program at my institution
has emerged as the ideal choice for various reasons. The program offers a comprehensive
curriculum that covers all major concepts of engineering, providing me with a solid
foundation in the field. The interdisciplinary approach of the program is particularly appealing
to me, as it will give me a much more extensive and practical understanding of various
engineering concepts.
Studying and working with highly experienced and skilled faculty members, along with the
prominent facilities provided by my institution, has helped me develop a strong technical skill
set and problem-solving abilities. This program has also given me the opportunity to work on
various projects, enhancing my practical knowledge and preparing me for real-world
challenges.

Why study in Canada?

Canada has always been my first choice when it comes to pursuing higher education. The
education system in Canada is renowned for its excellence and is ranked among the best in
the world. Additionally, Canada is known for its safe and peaceful environment, as well as its
superb healthcare facilities.
Studying in Canada will provide me with a dynamic, innovative, and challenging environment
in which I can further develop my skills and nurture my true potential. The Canadian
qualification I will obtain will serve as a strong foundation for my career and future growth.
Furthermore, studying alongside talented students from around the world will expose me to
diverse cultures and perspectives, enhancing my communication and interpersonal skills.

My Future Goals

After completing my B.Tech program in Canada, I intend to return to my home country, India,
with an outstanding skill set to contribute to the technology industry. India is experiencing
rapid growth in the technology sector, and I aim to be a part of this growth by utilizing the
knowledge and expertise gained during my studies in Canada. My goal is to become a
successful and dynamic professional, making a significant impact in the industry.
Academic Background and Language Proficiency

I have successfully completed my Bachelor's Degree in Engineering (B.Tech) from a reputed
institution in India. The rigorous curriculum and practical training provided during my
undergraduate studies have equipped me with a strong foundation in engineering principles
and problem-solving skills. Additionally, I have achieved an overall IELTS score of ${averageScore}, with
individual scores of ${data.listeningScore} in listening, ${data.readingScore} in reading, ${data.writingScore} in writing, and ${data.speakingScore} in speaking. These
language proficiency results demonstrate my ability to effectively communicate and succeed
in an English-speaking academic environment.
Finances
I have paid ${data.didGIC} CAD towards my first-year tuition fees and have also secured a
Guaranteed Investment Certificate (GIC) of ${data.gicAmount} CAD to cover my living expenses for the first
year. Furthermore, my family is fully supporting my education in Canada, ensuring that I
have sufficient finances to support my studies.

Conclusion

Dear Madam/Sir, 
    if I am granted the opportunity to study in Canada, I assure you that I will
abide by all the rules and regulations of the Canadian government, the local authorities, and
the educational institution. I kindly request you to process my visa application as soon as
possible, and I am grateful for your valuable time and consideration.
Sincerely,
${data.fullName}
  `
}
module.exports = generateEmail;