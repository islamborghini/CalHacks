# Caffeine Intake Recommender

![image](https://github.com/user-attachments/assets/6ba46e1b-0e7c-4e1d-9579-ce8f56bd5bc0)


## Inspiration

<p>
The members are part of a working/studying community that tends to rely on caffeine to improve their performance and focus. Over the years, this community has been expanding, as the idea of drinking a coffee or energetic drink becomes a trending activity, fostering new types of beverages in the market and coffee shops. While caffeine benefits one's performance, people tend to overestimate the advantages and neglect caffeine's side effects. If consumed in the wrong amount or at the wrong time, caffeine can negatively affect productivity, causing fatigue, headaches, excessive anxiety, or poor sleep quality. Many community members have experienced these side effects without understanding the underlying cause, leading to frustration as they assumed caffeine would enhance their performance. Therefore, the team created the Caffeine Intake Advisor to help people consume caffeine effectively and healthily. Zepp's Smart Watch also contributes to the ideation process by collecting relevant biological data such as sleep quality and stress levels. The team is confident that the product will positively impact people's well-being.
</p>

## What It Does

<p>
The Caffeine Intake Advisor app interacts directly with the user by asking about their caffeine beverage or food preference and their goal duration for the productive session. Based on the user's past biological responses to specific amounts of caffeine, real-time health metrics, and the time of day, the app recommends the optimal amount of caffeine.
</p>

<h3>Backend Process</h3>

<p>
To recommend the appropriate amount of caffeine, the app needs to know the user’s regular caffeine intake and their caffeine sensitivity. This data is collected and analyzed through the following steps:
</p>

<ol>
  <li>
    <p><strong>Initial Questionnaire:</strong> When the user creates an account, they answer questions about:
    </p>
    <ul>
      <li>Serving size: Amount of caffeinated drinks and food consumed per day</li>
      <li>Time: The usual time period when caffeine is consumed</li>
      <li>Variability: Whether the serving size varies daily or is consistent</li>
      <li>Duration of habit: How long the person has had this habit</li>
    </ul>
  </li>
  <li>
    <p><strong>5-Day Monitoring:</strong> The app monitors the user’s caffeine sensitivity based on real-time data:
    </p>
    <ul>
      <li>Sleep patterns: Sleep and wake-up times, and the impact of caffeine intake on sleep</li>
      <li>Stress level and heart rate: Baseline measurements and post-caffeine consumption measurements</li>
    </ul>
  </li>
  <li>
    <p><strong>Recommendation:</strong> After determining the user’s regular caffeine intake and sensitivity, the app recommends the optimal caffeine amount using the formula:
    </p>
    <p>
      Caffeine Amount (mg) = Regular Caffeine Intake x Caffeine Sensitivity Factor x Study Duration x Time Gap Factor
    </p>
  </li>
</ol>

## How We Built It

<p>
We used Intel data to train an algorithm and MindsDB to connect the machine learning algorithm with our software. The process can be categorized into several components:
</p>

<h3>Research</h3>
<p>
We researched key factors affecting caffeine intake and performance, compiled data on caffeinated beverages and foods, and developed a table specifying caffeine amounts in different units.
</p>

<h3>UI/UX Design</h3>
<p>
We designed wireframes for the smartwatch, focusing on an easy and smooth user experience. We used Figma to visualize the UI/UX aspects and ensure intuitive navigation.
</p>

<h3>Algorithm Training</h3>
<p>
We used MindsDB pre-trained models to predict caffeine intake based on existing datasets and real-time user data. The algorithm derives the caffeine amount using the formula mentioned above.
</p>

<h3>Development</h3>
<p>
We implemented backend code in JavaScript, integrated with Zepp OS API and AutoGUI for smartwatch compatibility.
</p>

## Challenges

<p>
We faced challenges in identifying key app features to maximize social impact within time and resource constraints. Limited access to real user datasets required extensive research and hypothesis testing.
</p>

## Accomplishments

<p>
We successfully integrated software with hardware and developed a realistic solution despite initial constraints. We created approximate user datasets through research and applied insights to generate the necessary data.
</p>

## What We Learned

<p>
We improved our ability to connect front-end and back-end components, enhanced critical thinking for effective data utilization, and honed problem-solving and communication skills.
</p>

## What's Next

<p>
We aim to make the app more personalized by adding questionnaire features for individual factors such as age, medications, pregnancy, menstrual cycles, and caffeine preferences. We plan to integrate the app with other health and fitness apps, and add caffeine intake tracking features for AI assistants like Siri and Alexa.
</p>

## Built With

<p>
JavaScript, MindsDB, Zepp OS, Figma
</p>

## More Info: 

<p>
<a href="https://devpost.com/software/caffeine-intake-recommender">Devpost</a>
</p>
