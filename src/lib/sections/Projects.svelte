<script>
  import Button from "$lib/component/Button.svelte";
  import ProjectCard from "$lib/component/ProjectCard.svelte";
</script>

<h2 class="m-5 text-center">Project Spotlight</h2>
<div class="inline-flex flex-col items-center gap-2 sm:max-w-4xl">
  <div class="grid w-full auto-rows-auto gap-5">
    <ProjectCard
      title="Paper review: ClimODE: Climate Forecasting With Physics-informed Neural ODEs, ICLR 2024"
      badges={["PyTorch", "Research", "CNN", "ODE"]}
      link="https://github.com/dataymeric/ClimODE"
    >
      <ul>
        <li>Re-implementation, experimentation and review.</li>
        <li>Creation of a poster to present the article.</li>
        <li>
          Enhanced key features like distributed training and code readability
        </li>
      </ul>
    </ProjectCard>
    <ProjectCard
      title="Neural Network DIY"
      badges={["Numpy", "Mathematics", "Neural Networks"]}
      link="https://github.com/dataymeric/NeuralNetworksDIY"
    >
      <ul>
        <li>Development of a neural network library entirely in Numpy</li>
        <li>
          Implementation of essential modules (linear layers, 1D convolutions,
          etc.) for creating, training and evaluating neural networks.
        </li>
        <li>
          Performance optimization through advanced use of Numpy for efficient
          computation
        </li>
      </ul>
    </ProjectCard>

    <ProjectCard
      title="Speaker Recognition & Sentiment analysis"
      badges={["NLP", "Bag of word", "Unbalanced learning"]}
      link="https://github.com/CharlesAttend/Speaker-Recognition-Sentiment-Analysis"
    >
      <ul>
        <li>
          Design and implementation of a natural language processing system
          based on bag-of-words representations for speaker recognition and
          sentiment analysis.
        </li>
        <li>
          Use of textual data pre-processing and machine learning modeling
          techniques (Naive Bayes, logistic regression, SVMs).
        </li>
        <li>
          Management of class balancing and estimation of model generalization
          performance.
        </li>
      </ul>
    </ProjectCard>
  </div>
  <Button
    text="See more"
    link="https://charlesattend.notion.site/7c86cccb99a240ba8143ecd763965de5?v=c1ed913cddfb4cd1aa0feacfafcf72cb&pvs=4"
  />
</div>
