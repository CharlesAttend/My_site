<script>
  import Button from "$lib/component/Button.svelte";
  import ProjectCard from "$lib/component/ProjectCard.svelte";
</script>

<h2 class="m-5 text-center">Project Spotlight</h2>
<div class="inline-flex flex-col items-center gap-2 sm:max-w-4xl">
  <div class="grid w-full auto-rows-auto gap-5">
    <ProjectCard
      title="Paper re-implementation: ClimODE: Climate Forecasting With Physics-informed Neural ODEs, ICLR 2024"
      badges={["PyTorch", "Torch Ignite", "CNN", "ViT", "ODE"]}
      link="https://github.com/dataymeric/ClimODE"
    >
      <ul>
        <li>Re-implementation, experimentation and review.</li>
        <li>
          Creation of a poster to present the article and our supplementary
          experiments.
        </li>
        <li>
          Enhanced key features like <strong>distributed training</strong> and
          <strong>code readability</strong>.
        </li>
        <li>
          Employed collaborative tools like <a
            href="https://charlesattend.notion.site/ClimODE-Notion-beb1e205faea4964b6f96b87c1af27e2?pvs=4"
            >Notion</a
          >, GitHub pre-commit hooks and EditorConfig to foster
          <strong>effective collaboration</strong> and maintain codebase cleanliness.
        </li>
      </ul>
    </ProjectCard>
    <ProjectCard
      title="Neural Network DIY"
      badges={["Numpy", "Mathematics", "Neural Networks"]}
      link="https://github.com/dataymeric/NeuralNetworksDIY"
    >
      <ul>
        <li>
          Development of a neural network library <strong
            >entirely in Numpy</strong
          >
        </li>
        <li>
          Implementation of essential modules (linear layers, 1D convolutions,
          etc.) for creating, training and evaluating neural networks.
        </li>
        <li>
          <strong>Performance optimization</strong> through advanced use of Numpy
          for efficient computation
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
