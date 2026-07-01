import ProjectPageWrapper from "../ProjectPageWrapper"
import PageImage from "../PageImage"

export default function Homekit() {
  return (
    <ProjectPageWrapper>
      <h1>
        Homekit
      </h1>
      <PageImage imageFileName="/homekit-home.png"/>
      <h2>Overview</h2>
      <p>
        The idea behind the homekit is to have a very useful device
        in the heart of my apartment to help manage things. I cannot suggest
        enough building your own custom version of this homekit. I use it every day without fail.
      </p>
      <h2>Tech Stack</h2>
      <p>It is a Kotlin app that is sideloaded onto an android tablet.</p>
      <ul>
        <li>Link to purchase the same tablet</li>
        <li>Developing on android tutorial I followed to get started.</li>
        <li>Android app studio</li>
      </ul>

      <h2>The Stand</h2>
      <p>I know what you are saying... what is that super cool stand?!</p>
      <PageImage imageFileName="/homekit-stand.png"/>
      <p>
        Introducing The Stand ©. Engineered from a proprietary corrugated substrate
        sourced from a box that used to have a Ninja Creamy in it, Stand represents the
        culmination of decades of design language, focus-grouped minimalism,
        and an unwavering commitment to shareholder value. Every crease was made
        with love and
        think about the fact that it is, fundamentally, a piece of trash
        propping up a tablet.
      </p>
      <p>
        Stand is not sold. Stand is licensed. What you are purchasing is not
        cardboard, but an experience, a lifestyle, a statement to your guests
        that you, too, believe a slightly bent rectangle can be a premium
        product. Compatible exclusively with itself.
        Battery not included, because it does not have one.
        Some assembly required.
      </p>
      <p>
        The schematic, a single line hand-drawn on a napkin, is available for
        purchase for 1 billion trillion dollars, financing available,
        AppleCare-style extended warranty sold separately, does not cover
        rain, dogs, or existential dread. Void where prohibited. Please
        recycle responsibly. (make it into another stand)
      </p>

      <h2>Home Page</h2>
      <PageImage imageFileName="/homekit-home-sc.jpg" />
      <h3>Features</h3>
      <ul>
        <li>
          Time / Date
        </li>
        <li>
          Current Weather
          <ul>
            <li>
              UV Index changes over to display the moon phase when UV = 0
            </li>
          </ul>
        </li>
        <li>
          Basic light toggling
        </li>
        <li>
          Google Calendar stack (scrollable into the future)
        </li>
        <li>
          Parking location summaries
        </li>
        <li>
          Custom backgrounds featuring my photography. Rotates on an interval you control
        </li>
        <li>
          The header nav bar goes away after 10 seconds on inaction
        </li>
        <li>
          Whole app red shifts after sunset
        </li>
      </ul>

      <h2>Weather Page</h2>
      <PageImage imageFileName="/homekit-weather-sc.jpg" />
      <h3>Features</h3>
      <ul>
        <li>
          5 minute refresh
        </li>
        <li>
          Basic current weather stats
        </li>
        <li>
          Minutely rain notification (unshown since it is not about to rain)
        </li>
        <li>
          Hourly forecast
        </li>
        <li>
          7 Day forecast
        </li>
      </ul>

      <h2>Lights Page</h2>
      <PageImage imageFileName="/homekit-lights-sc.jpg" />
      <h3>Features</h3>
      <ul>
        <li>
          Controls Wiz branded lights
        </li>
        <li>
          Brightness, RGB color picker, temperature slider
        </li>
      </ul>

      <h2>Calendar Page</h2>
      <PageImage imageFileName="/homekit-calendar-sc.jpg" />
      <h3>Features</h3>
      <ul>
        <li>
          Basically just a grid view of the google calendar that we saw on the home page
        </li>
        <li>
          I rarely need more info than what the stack provides. This page is not used often.
        </li>
      </ul>

      <h2>Car Page</h2>
      <PageImage imageFileName="/homekit-car-sc.jpg" />
      <h3>Features</h3>
      <p>
        For context, we live in a high rise and our parking deck
        is 7 floors. We each have a car and if you do not remember where
        your car is, it can take minutes to walk in the deck between floors.
        After several of these instances, it became one of the key features
        of this homekit.
      </p>
      <ul>
        <li>
          Click on the box to set what floor you are on and whether you walk up or down from the elevator.
        </li>
        <li>
          ie. I am parked such that you take the elevator to M (mezzanine) and then walk down (a very good parking spot!)
        </li>
      </ul>

      <h2>Zen Mode</h2>
      <PageImage imageFileName="/homekit-zen-sc.jpg" />
      <h3>Features</h3>
      <ul>
        <li>
          Turn this on at night. Just the time and date. De-stimulate
        </li>
        <li>
          If you press the half of the page, it turns off all lights!
        </li>
      </ul>

      <h2>Settings Page</h2>
      <PageImage imageFileName="/homekit-settings-1.jpg" />
      <PageImage imageFileName="/homekit-settings-2.jpg" />
      <PageImage imageFileName="/homekit-settings-3.jpg" />
      <h3>Features</h3>
      <ul>
        <li>
          The page automatically hides all android elements and goes full screen. That button exits full screen
        </li>
        <li>
          Home page photo rotation interval
        </li>
        <li>
          OpenWeatherMap API Key
        </li>
        <li>
          Lights. Add name, icon, IP address on network
        </li>
        <li>
          Google Calendar. Toggle what calendars from your Google account show
        </li>
        <li>
          Cars. Set name and display letter
        </li>
      </ul>

      <h1>Version 1</h1>
      <p>
        Sometimes it is about staying agile. When I first started this project
        I tried using a raspberry pi 3+ with the 7' touch screen.
        We used it for a good few months. It was slow and clunky but still useful.
        So useful I decided to invest the time and money into massively
        upgrading to the Android.
      </p>

      <h2>Tech Stack</h2>
      <ul>
        <li>Raspberry Pi 3+</li>
        <li>Touch Screen 7'</li>
        <li>Python cTKInter</li>
      </ul>

      <h2>Photos</h2>
      <PageImage
        imageFileName="/homekit-v1-1.jpeg"
        description="
          First attempt at getting it to work. Basic weather and lights hookup
      "/>
      <PageImage
        imageFileName="/homekit-v1-2.jpg"
        description="
          First proof of life! Boy was I sold on the grid UI. Still
          clearly unfinished but calendar integration and way too much weather information.
          Colors and everything looking good!
        "
        />
      <PageImage
        imageFileName="/homekit-v1-3.png"
        description="Unfortunately there is not a great picture of the final product.
          This is a screenshot from a video of me walking through it before I killed it.
          Still too much weather information. Very cramped. But still useful enough
          to where we were using it every single day! Super cute! Look at the
          car data squeezed in the top left! Wow!
        "
      />
      <PageImage
        imageFileName="/homekit-v1-4.png"
        description="
        And finally the settings modal. This is how you would route between pages.
        It also includes my favorite feature, the bomb button. It would blow up (kill) the app.
        Maybe I need one of those on my new homekit?
        "
        />
    </ProjectPageWrapper>
  )
}
