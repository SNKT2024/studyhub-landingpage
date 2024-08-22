// components/Features.jsx
import { Col, Image, Row, Stack } from "react-bootstrap";
import videocallImage from "../assets/img/video.jpeg";
import studyRec from "../assets/img/studyRec.jpeg";
import sched from "../assets/img/schdule.jpeg";
import note from "../assets/img/note.jpeg";
import roadmap from "../assets/img/roadmpa (3).jpeg";

// Define the features array
const features = [
  {
    id: 1,
    heading: "Text and Video Communication",
    description:
      "Real-time interaction through text and video communication allows immediate collaboration among students, enabling participation from any location and accommodating different schedules and time zones. It facilitates the easy exchange of study materials, supports collaborative project work, and offers opportunities for direct feedback and personalized tutoring sessions.",
    img: videocallImage,
  },
  {
    id: 2,
    heading: "Intelligent Study Recommendations",
    description:
      "StudyHub’s AI-driven system provides intelligent study recommendations tailored to your unique learning style and objectives. By analyzing your study habits and progress, it suggests the most effective materials and methods to help you achieve your goals faster. Elevate your learning experience with customized guidance that adapts to your needs.",
    img: studyRec,
  },
  {
    id: 3,
    heading: "Smart Scheduling Assistant & AI-Powered Chatbot",
    description:
      "Stay organized and on track with StudyHub’s Smart Scheduling Assistant, which helps you plan and manage your study sessions efficiently. Our AI-Powered Chatbot is available around the clock to answer your questions, provide study tips, and offer instant support. Together, these tools ensure you have the assistance you need to maximize your productivity and learning success.",
    img: sched,
  },
  {
    id: 4,
    heading: "Automated Note Summarization",
    description:
      "Effortlessly condense your notes with StudyHub's Automated Note Summarization feature. Our intelligent system analyzes and distills your notes into clear, concise summaries, saving you time and helping you focus on the key points. Enjoy streamlined review sessions and improved retention with minimal effort.",
    img: note,
  },
  {
    id: 5,
    heading: "Personalized Learning Paths",
    description:
      "Discover a tailored learning journey with StudyHub’s Personalized Learning Paths. Our system creates custom study plans based on your goals, strengths, and areas for improvement. Navigate your educational journey with targeted resources and milestones designed specifically for your success.",
    img: roadmap,
  },
];

// Features component
function Features({ heading, description, reverse, img }) {
  return (
    <Row
      style={{ height: "100vh" }}
      className="d-flex align-items-center"
      id="features"
    >
      {reverse ? (
        <>
          <Col
            className="d-flex align-items-center justify-content-center"
            md={6}
            sm={12}
            xs={{ order: "first" }}
          >
            <Image src={img} fluid />
          </Col>
          <Col
            className="d-flex align-items-center justify-content-center"
            md={6}
            sm={12}
          >
            <Stack gap={3}>
              <h1 className="mb-4" style={{ fontWeight: "700" }}>
                {heading}
              </h1>
              <p>{description}</p>
            </Stack>
          </Col>
        </>
      ) : (
        <>
          <Col
            className="d-flex align-items-center justify-content-center"
            md={6}
            sm={12}
          >
            <Stack gap={3}>
              <h1 className="mb-4" style={{ fontWeight: "700" }}>
                {heading}
              </h1>
              <p>{description}</p>
            </Stack>
          </Col>
          <Col
            className="d-flex align-items-center justify-content-center"
            md={6}
            sm={12}
            lg={{ order: "last" }}
            xs={{ order: "first" }}
          >
            <Image src={img} fluid />
          </Col>
        </>
      )}
    </Row>
  );
}

// FeaturesList component
export default function FeaturesList() {
  return (
    <>
      {features.map((feature, index) => (
        <Features
          key={feature.id}
          heading={feature.heading}
          description={feature.description}
          img={feature.img}
          reverse={index % 2 !== 0} // Use index to alternate layout
        />
      ))}
    </>
  );
}
