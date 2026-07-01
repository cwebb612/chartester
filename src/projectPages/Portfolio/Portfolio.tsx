import ProjectPageWrapper from "../ProjectPageWrapper"
import PageImage from "../PageImage"

export default function Portfolio() {
  return (
    <ProjectPageWrapper>
      <h1>Portfolio</h1>
      <PageImage
        imageFileName="/portfolio/diagram.png"
        maxWidth="800px"
        description="Rough diagram of where everything is hosted"
      />
      <h2>Chartester.com</h2>
      <p>Hand written React TS. Yes, we now need to specify when things are written by AI or by hand.
        Yes, I use AI for other things. It feels wrong to use it for a site like this.
        Built with Vite.
        Deployed via Firebase static hosting. The DNS is handled by
        GCP domains, which is cool because I am pretty sure all of that is
        in Squarespace these days.
      </p>
      <h2>Api.chartester.com</h2>
      <p>
        (Not deployed yet, but this is what it will be)
      </p>
      <p>
        Just a super basic Python FastAPI. It really only has 3 jobs:
        <ol>
          <li>
            Recieve data from the "Contact Me" form. Store it in the Mongo DB instance
          </li>
          <li>
            Display any attempts to contact me and let me manage it
          </li>
          <li>
            Get an object from Mongo DB that is full of data collected by the mini rack
          </li>
        </ol>
      </p>
      <p>
        This API scales to 0 to reduce costs, so retrieving data might be slow.
        That is perfectly fine for all 3 of these use cases considering how little traffic this
        website has.
      </p>
      <h2>
        Mongo DB
      </h2>
      <p>
        Like I said, just a free tier Mongo DB instance.
        Suprisingly, MongoDB gives you like 0.5 GB worth of storage for free which might
        not sound like a lot but I will likely never hit that limit for this website.
      </p>
      <h2>Rack</h2>
      <p>See the documentation for the mini rack on its own page!</p>
    </ProjectPageWrapper>
  )
}
