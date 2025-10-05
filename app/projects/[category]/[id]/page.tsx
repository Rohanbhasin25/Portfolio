import { Navigation } from "@/components/navigation"
import { notFound } from "next/navigation"

const allProjects = {
  design: {
    cignull: {
      title: "Cignull",
      description: "A comprehensive redesign of a mobile banking experience focused on accessibility and user trust.",
      content: `This project involved a complete overhaul of a legacy mobile banking application, with a focus on improving accessibility, building user trust, and streamlining complex financial tasks.

The challenge was to balance security requirements with user experience, ensuring that customers could easily manage their finances while maintaining the highest levels of data protection.

Through extensive user research, including interviews with customers across different age groups and technical comfort levels, we identified key pain points in the existing experience and developed solutions that addressed both functional and emotional needs.`,
      images: ["/projects/design/mobile-banking.png"],
      additionalContent: `The final design resulted in improved user satisfaction and established new accessibility standards across digital products.`,
    },
    rabbithole: {
      title: "Rabbithole",
      description: "Data visualization platform helping companies track and improve their environmental impact.",
      content: `This data visualization platform was designed to help companies understand and act on their environmental impact data. The challenge was to make complex sustainability metrics accessible and actionable for decision-makers at all levels.

Working closely with environmental scientists and business stakeholders, we developed a system that translates raw data into clear insights and recommendations.

The dashboard needed to serve multiple user types, from C-suite executives looking for high-level trends to sustainability managers needing detailed operational data.`,
      images: ["/projects/design/sustainability-dashboard.png"],
      additionalContent: `The platform has been adopted by companies to help track and reduce their environmental impact.`,
    },
    invokeai: {
      title: "InvokeAI",
      description: "A modular design system for creative professionals to showcase their work across multiple mediums.",
      content: `This project focused on creating a flexible design system that empowers creative professionals to present their work effectively across different platforms and mediums.

The system was built with modularity in mind, allowing users to customize and adapt components to match their unique creative vision while maintaining consistency and professionalism.`,
      images: ["/projects/design/portfolio-system.png"],
      additionalContent: `The design system has been adopted by creative professionals to showcase their portfolios with greater flexibility and impact.`,
    },
    imago: {
      title: "Imago",
      description:
        "Inspired from my favourite film references site, shot.cafe, Imago uses design profiles from Cosmos and Pinterest to help filmmakers find references in a way as beautiful as the frames themselves.",
      content: `I use shots.cafe to research or find shot references during storyboard, pre-production and ideation to bounce off existing shots in film. While the website functionally serves its purpose to provide these references, scrolling through it feels ancient and lacks the magic found in the shots themselves.`,
      referenceImages: [
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-10-05%20at%202.34.34%E2%80%AFAM-4eFDH24ecoKvMRmWThqlJaa115WgYn.png",
      ],
      searchContent: `Imago makes use of a single search window that allows users to search across film names, genres, directors or shot types from one place. I also allow users to add (and delete) filters to narrow their search space. We make use of a sans-serif and Avenir fonts to discern between titles and subtext on the page. The user can also hover onto an image to showcase the image name and click on it to reveal further information.`,
      images: [
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/G1Yg31_WoAAKBi7-0MKATOA80NzIdskkCl64Y6uMmWZcOG.jpeg",
      ],
      additionalContent: `The on-click action reveals key shot information such as shot tags (type, director, film), the colour pallette and user information.`,
      detailImages: [
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/G1aEGNcWQAALYeT-uuUr9caCKDJWrZoz0LYN6DNTnmKwt8.jpeg",
      ],
    },
    "canvas-redesign": {
      title: "Canvas Redesign",
      description:
        "Students around the world use Canvas everyday and open the app just to look at this. I designed something a bit better.",
      designImages: [
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-10-05%20at%202.13.40%E2%80%AFAM-l5rDwW2sJZ4zjFDlb6MPHEOqsGPGSC.png",
      ],
      content: `**Target User Description**

Description: The target user group for my project were college students using Canvas, specifically within the age range of 18-24. These students are navigating a demanding academic environment, often juggling coursework across multiple disciplines, deadlines and announcements.

Behavior/Characteristics of Interest: These students are actively seeking efficient ways to manage and streamline communication for academic purposes. They are interested in simplifying their interactions with various elements in their academic journeys and cohesively find their way through it.`,
      images: [
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Manual%20Annotation%20Process%20%288%29-R3EbUMLlSNabrE5YJEwuJQu4JGK4z2.png",
      ],
      problemStatement: `**The Problem:**

The primary problem faced by my target user group was the fragmentation of information across Canvas courses, leading to confusion, missed information, and increased stress.

"I often miss deadlines and have to scramble through tedious journeys on Canvas to find relevant information. The process is way too decentralised for one academic journey"

- Anonymous User from Survey`,
      additionalContent: `**User Research Methods Description**

• Chosen Methods: I employed interviews with scripted usability tests, contextual inquiry and surveys as my primary research methods.

• Justification: I think interviews allow for in-depth exploration of individual experiences and the nuanced challenges students face with academic communication platforms. Surveys complement this by gathering quantitative data from a broader sample, identifying common patterns and areas for intervention.

• Time Requirements: Interviews were conducted within the 30-45 minute range, ensuring a comprehensive exploration of the topic. Surveys were designed to take approximately 15 minutes to complete, respecting participants' time while gathering essential data.

**User Research through scripted usability tests**

• Interview Protocol:
  • Welcome: Thank you for taking time to interview today. We want to learn more about your experiences using the various Learning Management Systems and educational technologies which are offered at Georgia Tech. More specifically, we would love to learn about your positive and negative experiences in regards to class communication for academic activities you engage in on campus. First, we will ask some general information about you, your major, and what your situation looks like in school. Next, we have some questions regarding your current experience and how you currently navigate through Canvas. Finally, we want to know your opinion on what type of solutions you think could exist to solve existing challenges.

One thing we ask is if we can record your responses via audio recording? It is okay if you say no, and this does not prevent you from participating. I also want to remind you that you can let me know if you are uncomfortable at any time and want to stop, or if you want to skip a question. Do you have any questions before we get started? Check consent form.

(Record if permission is granted)

Great, this is [researcher name] with [participant] on [date]. (Only if recording: Do we have permission to record this interview?) Please remember that you can let us know if you would like to skip any questions that you don't want to answer, and you can ask for a break at any time.

  • Exit Script: Is there anything else you would like to add? What questions or feedback do you have for me? Describe any deception in this interview if you felt it existed?
    ■ Thank participants, debrief on the study's goals, and explain how their input will contribute to the project.

• Survey Protocol:
  • Includes a link to an online form hosted on a platform like Google Forms.
  • Questions designed to quantify experiences with academic communication, preferences, and perceived challenges.
  • Welcome: Brief introduction to the study's purpose and assurance of anonymity.
  • Consent: Implicit through participation, with an upfront explanation of how data will be used.
  • Exit Script: Thanks participants for their time and offers insight into how the findings will be applied.

**User Research Results**

I employed Google Sheets to compile all the survey responses. Here, the Likert scale responses are directly inputted as numerical data, while long and short answers are entered as text data.

For the structure of this dataset, we use the respondent's names as the row differentiator with the column headers being the different questions and relevant demographic information. The dataset is arranged as shown below:`,
      researchImages: [
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-10-05%20at%201.47.28%E2%80%AFAM-MlYfCyOYyKJ95keeG30FsGVa2ob2ta.png",
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-10-05%20at%201.48.19%E2%80%AFAM-7txWsOKxZPX2oqQjZI12dSe8rWxxTm.png",
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-10-05%20at%201.48.08%E2%80%AFAM-00McxgIUbHPTKQpu5JO6y3Pv1fsFan.png",
      ],
      analysisContent: `**Results Interpretation Process**

Since my survey and interview methods rely on a quantitative measure of user data such as a likert scale along with the general approach of open-ended, short answer type questions, I performed data interpretation for our collected user data using a two-pronged approach.

**Quantitative Data:**

• First, I employed descriptive statistical methods for central tendency (mean, median, mode) and dispersion (interquartile range, standard deviation) for our likert scale data and I performed these operations using commands in Google sheets itself.

I also conducted preliminary visualizations of our data by constructing box-plots to visually gauge the median, quartiles, and outliers for the quantitative aspect of data. We deploy the Pandas library in Python for data preprocessing and construct these visualizations using the matplotlib library in Python.`,
      analysisImages: [
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-10-05%20at%201.50.43%E2%80%AFAM-8DVGkgCOZuxUMtsd49wcRlGSd06m9k.png",
      ],
      qualitativeContent: `**For Qualitative Data:**

Due to the open-ended nature of our qualitative questions, I experimented with a variety of analysis methods to gauge common themes from the sea of natural language answers I received as user insight.

Naturally, for the questions such as "What do you think is the best part about the learning management software at Georgia Tech?" or "What do you think is the worst part about the learning management software at Georgia Tech?" we expect the sentiment polarity to be highly positive or negative respectively. However, we for certain open ended questions such as:

"Please describe your experience with the options you have selected."

"Why or why do you not think it is effective?"

I also employed a simple sentiment analysis across all sentences for this question using Textblob in Python and found the central tendency scores for the same. We use pandas for processing the data from our CSV and use the pyplot function in matplotlib to plot a simple histogram.`,
      qualitativeImages: [
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-10-05%20at%201.49.12%E2%80%AFAM-8VL8uP8SiuHzutKPTuIZ8md96lIQmp.png",
      ],
      dataAnalysisContent: `**Data Analysis Results**

Similar to our interpretation method, our analysis from the data is two-pronged as well, with different results for our quantitative and qualitative data.

**Quantitative:**

1) Measures of Central Tendency and Dispersion

We get the central tendency scores along with scores mapping out the dispersion data. We use the interquartile range instead of a normal range for measuring out our dispersion because we get a sense of the middle 50% of our data.`,
      dataAnalysisImages: [
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-10-05%20at%201.50.12%E2%80%AFAM-JAtxyWQ87ZgWnbYfeXoMr8BmaRtX8v.png",
      ],
      findingsContent: `**Qualitative:**

1) Sentiment Analysis Score

The range for our polarity is from -1 to +1 with -1 being most negative and +1 being most positive on the scale, with 0 signifying a neutral sentiment. We find the sentiment polarity for our first question on learning management software effectiveness to be more on the neutral side with a median score of 0 and mean of 0.06. However, I found the user experience for using Canvas, and particularly the homepage as it is to be leaning more towards the lower positive side with a mean score of 0.27 and median of 0.26 (so general dissatisfaction or lukewarm acceptance)`,
      findingsImages: [
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-10-05%20at%201.50.59%E2%80%AFAM-sV1PrxWSO34KPZfaUtLjBzm2YLzFwh.png",
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-10-05%20at%201.51.49%E2%80%AFAM-MlUGz8bLnLURNjPlapWkpNQjYwPXWP.png",
      ],
      keyFindingsContent: `2) Manual reading and assessment of user answers

Finally, we scope out our key findings (summarized below) by manually going through all user answers for theme and pattern identification.

**Key Findings from User Research**

1) Adding too much functionality with another tool will lead to overall higher confusion and complexity:

We found that participants do not desire an entirely new platform with entirely new functionality described in key finding [1]. Participants are already past the limit on the number of platforms they must traverse to do their work. This is valuable because it indicates how the new Canvas redesign will be more of a functional glue rather than an entirely new service. Participants currently have to keep track of multiple services simultaneously and are resistant to having to adjust to a new one.

2) Professor communication portals need to be unified:

Participants described experiences in which they missed homeworks or even lectures because class communication was not adequately conveyed to them personally. This is valuable as it indicates a critical feature of our platform must be to make class communication more accessible to the student. Currently, students are not able to be updated in a timely manner as class communication may appear shuffled or mixed up across different class pages on Canvas. One user states:

"I'm aware of some students using third-party platforms like Notion or Trello to create organized dashboards for each class. These tools allow for better management and integration of information from various platforms. Additionally, some students have expressed interest in the idea of a unified communication platform specifically designed for academic settings."

3) Misalignment of dates (e.g appointments, exams, studios, homework) which leads to unclear deadlines:

The misalignment and more importantly, presence of dates and deadlines across different classes in different documents can lead to confusion, missed assignments, and undue stress for students, with 62.7% of our participants missing some form of class or assignment because they didn't know something was coming up.

**Key Design Goal:**

The foremost design goal of this project then becomes to ensure that the Canvas offers a streamlined view or a snapshot of what the user is facing academically, focusing on ease of navigation and essential functionalities present on one screen. This is in response to the finding that excessive features or information scattered across different pages can lead to confusion and detract from the utility of the tool. The aim is to create a home dashboard and informational query page that is intuitive, reducing the time and effort required to become proficient in its use.

**Evolution**

To fulfill this design goal, the project eventually evolved to new screens for canvas. One redesign of the current home page and additional "co-pilot" inspired screen that would use something like a RAG to ingest class information and allow users to perform natural language queries to find any information across any class.

1) Dashboard

This lofi mockup shows an aggregate of all of the relevant information a user might want from the new home page. The screen currently involves 6 different widgets, but the idea is that the screen is customizable and this can be seen by giving the user the ability to close out undesired tabs or clean up the home page in the way they want (similar to how widgets are organised on iOS). This is supposed to be a modular dashboard in which the user makes the decisions about how to view what information and each of the widgets is meant to be interactive and direct the user to that specific place in the application.`,
      dashboardImages: [
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-10-05%20at%202.18.29%E2%80%AFAM-2APaFZ4daWJ0rwA2pd5DpZJnWlsDoZ.png",
      ],
      dashboardDesignContent: `After settling on a design system and rough concept for the home page, I whipped up a design on Figma. The two font typography system (one a condensed sans serif font and one an inter variant) is meant to reinforce an aesthetic somewhat adjacent to old academia) along with customisable images for each course is meant to make the academic mundane, routine into an active learning and transformational journey.`,
      assistantImages: [
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-10-05%20at%202.19.09%E2%80%AFAM-2gUutjm4bzX8sQ08I6mR70v4EUwrha.png",
      ],
      assistantContent: `2) Assistant Screen

A riff of ChatGPT's mobile querying screen, I started first with a text input field that would allow users to change the courses for which they were performing their queries (which could be used in some later designs as a neat filtering system). I also included some sample query cards to show what types of queries are possible with our new page.`,
      finalDesignImages: [
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-10-05%20at%202.56.03%E2%80%AFAM-SQrYb2ksu4udsdi9k2EzWxVhkJQqvC.png",
      ],
    },
  },
  research: {},
  film: {},
}

interface ProjectPageProps {
  params: {
    category: string
    id: string
  }
}

export default function ProjectPage({ params }: ProjectPageProps) {
  const { category, id } = params

  // Check if category and project exist
  if (!allProjects[category as keyof typeof allProjects]) {
    notFound()
  }

  const project =
    allProjects[category as keyof typeof allProjects][id as keyof (typeof allProjects)[keyof typeof allProjects]]

  if (!project) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <main className="max-w-4xl mx-auto px-6 py-16">
        <div className="space-y-12">
          {/* Header */}
          <div className="space-y-6">
            <h1 className="font-condensed text-4xl font-bold text-foreground text-balance">{project.title}</h1>
            <div className="w-24 h-1 bg-foreground"></div>
            <p className="font-helvetica text-lg text-foreground leading-relaxed text-pretty">{project.description}</p>
          </div>

          {/* Content */}
          <div className="space-y-8">
            <div className="prose prose-lg max-w-none space-y-6">
              {project.content.split("\n\n").map((paragraph, index) => {
                // Check if paragraph is a heading (starts with **)
                if (paragraph.startsWith("**") && paragraph.endsWith("**")) {
                  const headingText = paragraph.replace(/\*\*/g, "")
                  return (
                    <h2 key={index} className="font-times italic text-2xl text-foreground mt-8 mb-4">
                      {headingText}
                    </h2>
                  )
                }
                if (paragraph.startsWith("•") && paragraph.includes(":")) {
                  const [heading, ...rest] = paragraph.split(":")
                  return (
                    <p key={index} className="font-helvetica text-foreground leading-relaxed text-pretty ml-4">
                      <span className="font-bold">{heading}:</span>
                      {rest.join(":")}
                    </p>
                  )
                }
                // Check if it's a bullet point
                if (paragraph.startsWith("•")) {
                  return (
                    <p key={index} className="font-helvetica text-foreground leading-relaxed text-pretty ml-4">
                      {paragraph}
                    </p>
                  )
                }
                // Regular paragraph
                return (
                  <p key={index} className="font-helvetica text-foreground leading-relaxed text-pretty">
                    {paragraph}
                  </p>
                )
              })}
            </div>

            {/* Reference Images */}
            {project.referenceImages && (
              <div className="space-y-6">
                {project.referenceImages.map((image, index) => (
                  <div key={index} className="w-full rounded-lg overflow-hidden">
                    <img
                      src={image || "/placeholder.svg"}
                      alt={`Reference Image ${index + 1}`}
                      className="w-full h-auto object-contain"
                    />
                  </div>
                ))}
              </div>
            )}

            {/* Search Functionality Content */}
            {project.searchContent && (
              <div className="prose prose-lg max-w-none space-y-6">
                <p className="font-helvetica text-foreground leading-relaxed text-pretty">{project.searchContent}</p>
              </div>
            )}

            {/* Main Images */}
            <div className="space-y-6">
              {project.images.map((image, index) => (
                <div key={index} className="w-full rounded-lg overflow-hidden">
                  <img
                    src={image || "/placeholder.svg"}
                    alt={`${project.title} - Image ${index + 1}`}
                    className="w-full h-auto object-contain"
                  />
                </div>
              ))}
            </div>

            {project.problemStatement && (
              <div className="prose prose-lg max-w-none space-y-6">
                {project.problemStatement.split("\n\n").map((paragraph, index) => {
                  if (paragraph.startsWith("**") && paragraph.endsWith("**")) {
                    const headingText = paragraph.replace(/\*\*/g, "")
                    return (
                      <h2 key={index} className="font-times italic text-2xl text-foreground mt-8 mb-4">
                        {headingText}
                      </h2>
                    )
                  }
                  if (paragraph.startsWith('"')) {
                    return (
                      <p
                        key={index}
                        className="font-times italic text-base text-foreground leading-relaxed text-pretty"
                      >
                        {paragraph}
                      </p>
                    )
                  }
                  if (paragraph.startsWith("- Anonymous")) {
                    return (
                      <p
                        key={index}
                        className="font-times italic text-base text-foreground leading-relaxed text-pretty"
                      >
                        {paragraph}
                      </p>
                    )
                  }
                  return (
                    <p key={index} className="font-helvetica text-foreground leading-relaxed text-pretty">
                      {paragraph}
                    </p>
                  )
                })}
              </div>
            )}

            {/* Additional Content */}
            {project.additionalContent && (
              <div className="prose prose-lg max-w-none space-y-6">
                {project.additionalContent.split("\n\n").map((paragraph, index) => {
                  if (paragraph.startsWith("**") && paragraph.endsWith("**")) {
                    const headingText = paragraph.replace(/\*\*/g, "")
                    return (
                      <h2 key={index} className="font-times italic text-2xl text-foreground mt-8 mb-4">
                        {headingText}
                      </h2>
                    )
                  }
                  if (paragraph.startsWith("•") && paragraph.includes(":")) {
                    const [heading, ...rest] = paragraph.split(":")
                    return (
                      <p key={index} className="font-helvetica text-foreground leading-relaxed text-pretty ml-4">
                        <span className="font-bold">{heading}:</span>
                        {rest.join(":")}
                      </p>
                    )
                  }
                  if (paragraph.startsWith("•")) {
                    return (
                      <p key={index} className="font-helvetica text-foreground leading-relaxed text-pretty ml-4">
                        {paragraph}
                      </p>
                    )
                  }
                  return (
                    <p key={index} className="font-helvetica text-foreground leading-relaxed text-pretty">
                      {paragraph}
                    </p>
                  )
                })}
              </div>
            )}

            {/* Research Images */}
            {project.researchImages && (
              <div className="space-y-6">
                {project.researchImages.map((image, index) => (
                  <div key={index} className="w-full rounded-lg overflow-hidden">
                    <img
                      src={image || "/placeholder.svg"}
                      alt={`Research Image ${index + 1}`}
                      className="w-full h-auto object-contain"
                    />
                  </div>
                ))}
              </div>
            )}

            {/* Analysis Content */}
            {project.analysisContent && (
              <div className="prose prose-lg max-w-none space-y-6">
                {project.analysisContent.split("\n\n").map((paragraph, index) => {
                  if (paragraph.startsWith("**") && paragraph.endsWith("**")) {
                    const headingText = paragraph.replace(/\*\*/g, "")
                    return (
                      <h2 key={index} className="font-times italic text-2xl text-foreground mt-8 mb-4">
                        {headingText}
                      </h2>
                    )
                  }
                  if (paragraph.startsWith("•") && paragraph.includes(":")) {
                    const [heading, ...rest] = paragraph.split(":")
                    return (
                      <p key={index} className="font-helvetica text-foreground leading-relaxed text-pretty ml-4">
                        <span className="font-bold">{heading}:</span>
                        {rest.join(":")}
                      </p>
                    )
                  }
                  if (paragraph.startsWith("•")) {
                    return (
                      <p key={index} className="font-helvetica text-foreground leading-relaxed text-pretty ml-4">
                        {paragraph}
                      </p>
                    )
                  }
                  return (
                    <p key={index} className="font-helvetica text-foreground leading-relaxed text-pretty">
                      {paragraph}
                    </p>
                  )
                })}
              </div>
            )}

            {/* Analysis Images */}
            {project.analysisImages && (
              <div className="space-y-6">
                {project.analysisImages.map((image, index) => (
                  <div key={index} className="w-full rounded-lg overflow-hidden">
                    <img
                      src={image || "/placeholder.svg"}
                      alt={`Analysis Image ${index + 1}`}
                      className="w-full h-auto object-contain"
                    />
                  </div>
                ))}
              </div>
            )}

            {/* Qualitative Content */}
            {project.qualitativeContent && (
              <div className="prose prose-lg max-w-none space-y-6">
                {project.qualitativeContent.split("\n\n").map((paragraph, index) => {
                  if (paragraph.startsWith("**") && paragraph.endsWith("**")) {
                    const headingText = paragraph.replace(/\*\*/g, "")
                    return (
                      <h2 key={index} className="font-times italic text-2xl text-foreground mt-8 mb-4">
                        {headingText}
                      </h2>
                    )
                  }
                  if (paragraph.startsWith("•") && paragraph.includes(":")) {
                    const [heading, ...rest] = paragraph.split(":")
                    return (
                      <p key={index} className="font-helvetica text-foreground leading-relaxed text-pretty ml-4">
                        <span className="font-bold">{heading}:</span>
                        {rest.join(":")}
                      </p>
                    )
                  }
                  if (paragraph.startsWith("•")) {
                    return (
                      <p key={index} className="font-helvetica text-foreground leading-relaxed text-pretty ml-4">
                        {paragraph}
                      </p>
                    )
                  }
                  return (
                    <p key={index} className="font-helvetica text-foreground leading-relaxed text-pretty">
                      {paragraph}
                    </p>
                  )
                })}
              </div>
            )}

            {/* Qualitative Images */}
            {project.qualitativeImages && (
              <div className="space-y-6">
                {project.qualitativeImages.map((image, index) => (
                  <div key={index} className="w-full rounded-lg overflow-hidden">
                    <img
                      src={image || "/placeholder.svg"}
                      alt={`Qualitative Analysis Image ${index + 1}`}
                      className="w-full h-auto object-contain"
                    />
                  </div>
                ))}
              </div>
            )}

            {/* Data Analysis Content */}
            {project.dataAnalysisContent && (
              <div className="prose prose-lg max-w-none space-y-6">
                {project.dataAnalysisContent.split("\n\n").map((paragraph, index) => {
                  if (paragraph.startsWith("**") && paragraph.endsWith("**")) {
                    const headingText = paragraph.replace(/\*\*/g, "")
                    return (
                      <h2 key={index} className="font-times italic text-2xl text-foreground mt-8 mb-4">
                        {headingText}
                      </h2>
                    )
                  }
                  if (/^\d\)/.test(paragraph) && paragraph.includes("\n")) {
                    const [heading, ...rest] = paragraph.split("\n")
                    return (
                      <div key={index} className="ml-4 space-y-2">
                        <p className="font-helvetica text-foreground leading-relaxed text-pretty">
                          <span className="font-bold">{heading}</span>
                        </p>
                        {rest.map((line, i) => (
                          <p key={i} className="font-helvetica text-foreground leading-relaxed text-pretty">
                            {line}
                          </p>
                        ))}
                      </div>
                    )
                  }
                  if (paragraph.startsWith("•") || /^\d\)/.test(paragraph)) {
                    return (
                      <p key={index} className="font-helvetica text-foreground leading-relaxed text-pretty ml-4">
                        {paragraph}
                      </p>
                    )
                  }
                  return (
                    <p key={index} className="font-helvetica text-foreground leading-relaxed text-pretty">
                      {paragraph}
                    </p>
                  )
                })}
              </div>
            )}

            {/* Data Analysis Images */}
            {project.dataAnalysisImages && (
              <div className="space-y-6">
                {project.dataAnalysisImages.map((image, index) => (
                  <div key={index} className="w-full rounded-lg overflow-hidden">
                    <img
                      src={image || "/placeholder.svg"}
                      alt={`Data Analysis Image ${index + 1}`}
                      className="w-full h-auto object-contain"
                    />
                  </div>
                ))}
              </div>
            )}

            {/* Findings Content */}
            {project.findingsContent && (
              <div className="prose prose-lg max-w-none space-y-6">
                {project.findingsContent.split("\n\n").map((paragraph, index) => {
                  if (paragraph.startsWith("**") && paragraph.endsWith("**")) {
                    const headingText = paragraph.replace(/\*\*/g, "")
                    return (
                      <h2 key={index} className="font-times italic text-2xl text-foreground mt-8 mb-4">
                        {headingText}
                      </h2>
                    )
                  }
                  if (/^\d\)/.test(paragraph) && paragraph.includes("\n")) {
                    const [heading, ...rest] = paragraph.split("\n")
                    return (
                      <div key={index} className="ml-4 space-y-2">
                        <p className="font-helvetica text-foreground leading-relaxed text-pretty">
                          <span className="font-bold">{heading}</span>
                        </p>
                        {rest.map((line, i) => (
                          <p key={i} className="font-helvetica text-foreground leading-relaxed text-pretty">
                            {line}
                          </p>
                        ))}
                      </div>
                    )
                  }
                  if (paragraph.startsWith("•") || /^\d\)/.test(paragraph)) {
                    return (
                      <p key={index} className="font-helvetica text-foreground leading-relaxed text-pretty ml-4">
                        {paragraph}
                      </p>
                    )
                  }
                  return (
                    <p key={index} className="font-helvetica text-foreground leading-relaxed text-pretty">
                      {paragraph}
                    </p>
                  )
                })}
              </div>
            )}

            {/* Findings Images */}
            {project.findingsImages && (
              <div className="space-y-6">
                {project.findingsImages.map((image, index) => (
                  <div key={index} className="w-full rounded-lg overflow-hidden">
                    <img
                      src={image || "/placeholder.svg"}
                      alt={`Findings Image ${index + 1}`}
                      className="w-full h-auto object-contain"
                    />
                  </div>
                ))}
              </div>
            )}

            {/* Key Findings Content */}
            {project.keyFindingsContent && (
              <div className="prose prose-lg max-w-none space-y-6">
                {project.keyFindingsContent.split("\n\n").map((paragraph, index) => {
                  if (paragraph.startsWith("**") && paragraph.endsWith("**")) {
                    const headingText = paragraph.replace(/\*\*/g, "")
                    return (
                      <h2 key={index} className="font-times italic text-2xl text-foreground mt-8 mb-4">
                        {headingText}
                      </h2>
                    )
                  }
                  if (/^\d\)/.test(paragraph) && paragraph.includes("\n")) {
                    const [heading, ...rest] = paragraph.split("\n")
                    return (
                      <div key={index} className="ml-4 space-y-2">
                        <p className="font-helvetica text-foreground leading-relaxed text-pretty">
                          <span className="font-bold">{heading}</span>
                        </p>
                        {rest.map((line, i) => (
                          <p key={i} className="font-helvetica text-foreground leading-relaxed text-pretty">
                            {line}
                          </p>
                        ))}
                      </div>
                    )
                  }
                  if (paragraph.startsWith("•") || /^\d\)/.test(paragraph)) {
                    return (
                      <p key={index} className="font-helvetica text-foreground leading-relaxed text-pretty ml-4">
                        {paragraph}
                      </p>
                    )
                  }
                  return (
                    <p key={index} className="font-helvetica text-foreground leading-relaxed text-pretty">
                      {paragraph}
                    </p>
                  )
                })}
              </div>
            )}

            {/* Dashboard Images */}
            {project.dashboardImages && (
              <div className="space-y-6">
                {project.dashboardImages.map((image, index) => (
                  <div key={index} className="w-full rounded-lg overflow-hidden">
                    <img
                      src={image || "/placeholder.svg"}
                      alt={`Dashboard Design ${index + 1}`}
                      className="w-full h-auto object-contain"
                    />
                  </div>
                ))}
              </div>
            )}

            {/* Dashboard Design Content */}
            {project.dashboardDesignContent && (
              <div className="prose prose-lg max-w-none space-y-6">
                {project.dashboardDesignContent.split("\n\n").map((paragraph, index) => {
                  return (
                    <p key={index} className="font-helvetica text-foreground leading-relaxed text-pretty">
                      {paragraph}
                    </p>
                  )
                })}
              </div>
            )}

            {/* Assistant Images */}
            {project.assistantImages && (
              <div className="space-y-6">
                {project.assistantImages.map((image, index) => (
                  <div key={index} className="w-full rounded-lg overflow-hidden">
                    <img
                      src={image || "/placeholder.svg"}
                      alt={`Assistant Screen Design ${index + 1}`}
                      className="w-full h-auto object-contain"
                    />
                  </div>
                ))}
              </div>
            )}

            {/* Assistant Content */}
            {project.assistantContent && (
              <div className="prose prose-lg max-w-none space-y-6">
                {project.assistantContent.split("\n\n").map((paragraph, index) => {
                  if (/^\d\)/.test(paragraph) && paragraph.includes("\n")) {
                    const [heading, ...rest] = paragraph.split("\n")
                    return (
                      <div key={index} className="ml-4 space-y-2">
                        <p className="font-helvetica text-foreground leading-relaxed text-pretty">
                          <span className="font-bold">{heading}</span>
                        </p>
                        {rest.map((line, i) => (
                          <p key={i} className="font-helvetica text-foreground leading-relaxed text-pretty">
                            {line}
                          </p>
                        ))}
                      </div>
                    )
                  }
                  return (
                    <p key={index} className="font-helvetica text-foreground leading-relaxed text-pretty">
                      {paragraph}
                    </p>
                  )
                })}
              </div>
            )}

            {/* Detail Images */}
            {project.detailImages && (
              <div className="space-y-6">
                {project.detailImages.map((image, index) => (
                  <div key={index} className="w-full rounded-lg overflow-hidden">
                    <img
                      src={image || "/placeholder.svg"}
                      alt={`Detail View ${index + 1}`}
                      className="w-full h-auto object-contain"
                    />
                  </div>
                ))}
              </div>
            )}

            {/* Final Design Images */}
            {project.finalDesignImages && (
              <div className="space-y-6">
                {project.finalDesignImages.map((image, index) => (
                  <div key={index} className="w-full rounded-lg overflow-hidden">
                    <img
                      src={image || "/placeholder.svg"}
                      alt={`Final Design ${index + 1}`}
                      className="w-full h-auto object-contain"
                    />
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  )
}
