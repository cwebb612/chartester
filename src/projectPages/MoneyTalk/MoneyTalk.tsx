import ProjectPageWrapper from "../ProjectPageWrapper"
import PageImage from "../PageImage"

export default function MoneyTalk() {
  return (
    <ProjectPageWrapper>
      <h1>Money Talk</h1>
      <p>
        <a href="https://github.com/cwebb612/money-talk" target="_blank">
        Github
        </a>
      </p>
      <PageImage
        imageFileName={"/money-talk-dark.png"}
        maxWidth={"400px"}
        description="Screenshot of Home Page (Sample Data)"
      />
      <h2>Inspiration</h2>
      <p>
        I was looking for personal finance software to just see all of
        my accounts in one place to stay informed.
        I do not need to track transactions.
        I know where my money is going. I know where it is coming from.
        Between my fiancée and I with bank accounts, brokerage accounts, 401k, ESPP,
        crypto, credit cards, etc... the spreadsheet just was not cutting it.
      </p>
      <p>In the end I had 3 very important non-negotiables:</p>
      <ol>
        <li>It needed to be self hosted. I own all the data. It only exists on my network.</li>
        <li>I need to enjoy using it.</li>
        <li>My fiancée needs to enjoy using it.</li>
      </ol>
      <h2>Main User Flows</h2>
      <ol>
        <li>
          Monthly reconciliation. I go to each of my accounts and come back with the value.
        </li>
        <li>
          Managing at a high level. See where the money is. Determine if it needs to move.
          <ol  type="a">
            <li>
              Also on a per-account basis. How is my asset breakdown in my brokerage accounts?
            </li>
          </ol>
        </li>
        <li>
          Analyzing the data. Seeing trends. Future prediction. Catch anomolies.
        </li>
      </ol>
      <h2>Options explored</h2>
      <ul>
        <li>
          <a href="https://github.com/maybe-finance/maybe" target="_blank">
            Maybe Finance
          </a>
        </li>
        <li>
          <a href="https://github.com/firefly-iii/firefly-iii" target="_blank">
            Firefly III
          </a>
        </li>
        <li>
          <a href="https://github.com/actualbudget/actual" target="_blank">
            Actual Budget
          </a>
        </li>
      </ul>
      <p>
        I will not go into too many details on each one in particular but all 3 have the
        same issue of being transaction based. I do not want to deal with exporting my
        bank statements. I do not want to categorize my spending or have to do all of this
        work when I transfer money between accounts. These were far too legit for my usages.
      </p>
      <p>Maybe Finance, which is now "Sure" finance (very funny guys)
        was on the right track. They had a clean modern UI that I used as
        inspiration for Money Talk. But an AI chatbot in there? Come on give me a break...
      </p>
      <p>
        At one point or another I had each of these deployed to my network.
        All of them met 1 of my 3 non-negotiables being self hosted. None were
        enjoyable to use and my fiancée dreaded opening all 3.
        It was abundantly clear I needed to build my own app
      </p>
      <h2>
        Key Features
      </h2>
      <ul>
        <li>
          Net Worth Dashboard - line chart of total net worth over time, asset allocation breakdown, and a full account breakdown
        </li>
        <li>
          Three Account Types - Cash, Investments, and Liability
        </li>
        <li>
          Reconciliation workflow - each account stores a link to its institution
          so you can open your bank or brokerage, check the current balance,
           and update it in one flow; every reconciliation is recorded
        </li>
        <li>
          Pink/Dark modes - for the girliepops out there that are trying to get their money up.
        </li>
        <li>
          REST API - read-only endpoints for net worth history, accounts, and account activity; secured with API keys
        </li>
        <li>
          API key management - create and revoke keys from within the app; interactive API docs at `/api-doc`
        </li>
        <li>
          Yahoo Finance Integration - pull live stock and crypto prices
        </li>
      </ul>
      <h2>
        Screenshots
      </h2>
      <PageImage
        imageFileName="/money-talk-pink-mode.png"
        maxWidth="400px"
        description="Yes I was serious about the pink mode. My fiancée loves it. S tier feature"
      />
      <PageImage
        imageFileName="/money-talk-create-account.png"
        maxWidth="400px"
        description="Form to create an account. Options for account types and a link to wherever
          you go to see the value of your account.
          "
      />
      <PageImage
        imageFileName="/money-talk-account.png"
        maxWidth="400px"
        description="When viewing the account,
          if you put in a link it will show right there under 'go to account'.
          Super helpful feature while reconciling!
          "
      />
      <PageImage
        imageFileName="/money-talk-edit-cash.png"
        maxWidth="400px"
        description="Editing the account is simple. Just put in the value of the account and the date of said value."
      />
      <PageImage
        imageFileName="/money-talk-edit-investments.png"
        maxWidth="400px"
        description="While editing investment accounts, including stocks or crypto,
          inputting the ticker will then fetch the actual price of that security.
          Input CASH if there are cash holdings in the account.
          "
      />
      <PageImage
        imageFileName="/money-talk-trends.png"
        maxWidth="400px"
        description="Then we have the analytics tab. It says beta for a reason. This is
          some AI slop of a page to just help look at trends and get high scores in life.
          "
      />
      <PageImage
        imageFileName="/money-talk-predictions.png"
        maxWidth="400px"
        description="This is a fairly feature poor predictions chart. Definitely take
          anything you do here with a grain of salt. Still cool to think about these things
          and understand compounding interest and see it happen with your money!
          "
      />
      <h2>
        Check it out!
      </h2>
      <p>
        <a href="https://github.com/cwebb612/money-talk" target="_blank">
          Check it out for yourself!
        </a>
      </p>
      <p>
        If you need help with docker or learning how to host - ask me!
        All you should need is something like a Raspberry Pi and a bank account.
      </p>
    </ProjectPageWrapper>
  )
}
