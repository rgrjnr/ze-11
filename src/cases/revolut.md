---
title: "From Hello to Goodbye: Optimising Revolut’s User Journey"
layout: cases.njk
tags: cases
excerpt: This project focused on improving the account management experience within the Revolut app, specifically the creation and deletion of accounts.This is a sample case study demonstrating the structure and content format
image: /assets/cases/revolut/og.png
---

{% from "components/note.njk" import note %}
{% from "components/figma.njk" import figma %}
{% from "components/persona.njk" import persona %}

## Overview

As part of a UX/UI design challenge, this project focused on improving the account management experience within the Revolut app, specifically the creation and deletion of accounts. While Revolut is known for its sleek interface and wide range of digital banking features, we identified pain points in how users onboard and offboard—crucial moments that can shape their overall trust in the platform.

Our objective was to streamline the account creation process for new users and make account deletion clearer and more transparent, ensuring both actions felt secure, intuitive, and user-friendly.

From research and usability analysis to prototyping and testing, this project delivered a solution that respects Revolut’s modern design language while reducing friction at key moments in the user journey.

## Process

{% include "src/assets/images/process.svg" %}

## Discovery

Revolut is one of the world’s leading digital banking platforms, recognized for its sleek design and diverse features—from international transfers to budgeting tools and crypto trading. However, key user flows like onboarding and account cancellation still pose significant usability challenges.

The onboarding process spans around 28 screens, while account deletion can take anywhere from 4 to 9 steps, depending on the user’s status and account balance. For a platform known for speed and simplicity, these flows often feel unnecessarily complex.

To better understand the pain points, we conducted six usability tests focused on both journeys. For the account creation flow, I mapped out a detailed user journey to highlight the key friction points identified.

<table class="align-wide text-center">
    <tr>
        <th>Scenario</th>
        <th>Sign In</th>
        <th>Address</th>
        <th>Professional Area</th>
        <th>Go back</th>
        <th>Photography</th>
        <th>Citizenship</th>
        <th>Identification</th>
        <th>Card of choice</th>
    </tr>
    <tr>
        <td style="text-transform: uppercase; font-size: 80%; letter-spacing: 0.1em;">Happy</td>
        <td>🙂</td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td>🙂</td>
        <td></td>
        <td></td>
        
    </tr>
    <tr>
        <td style="text-transform: uppercase; font-size: 80%; letter-spacing: 0.1em;">Neutral</td>
        <td></td>
        <td>😐</td>
        <td></td>
        <td></td>
        <td>😐</td>
        <td></td>
        <td>😐</td>
        <td>😐</td>
        
    </tr>
    <tr>
        <td style="text-transform: uppercase; font-size: 80%; letter-spacing: 0.1em;">Unhappy</td>
        <td></td>
        <td></td>
        <td>☹️</td>
        <td>☹️</td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        
    </tr>
    <tr style="line-height: 1.1">
        <td style="text-transform: uppercase; font-size: 80%; letter-spacing: 0.1em;">Pain Points</td>
        <td>I like the opening animations!</td>
        <td>It is very complex to find the correct address...</td>
        <td>I can't find my area. I feel excluded!</td>
        <td>I can't go back to the previous page!</td>
        <td>I don't really like taking pictures</td>
        <td>I like it to be dynamic!</td>
        <td>Why do I have to give so much information?</td>
        <td>Do I have to choose a physical card now?</td>
    </tr>
</table>

While Revolut offers a relatively straightforward way to close an account within the app, the experience still raises questions and emotional reactions for users. To better understand how people navigate this flow, we mapped out the entire process and conducted usability tests to capture real user feedback. What follows is a step-by-step walkthrough of that experience, highlighting moments of clarity, confusion, and frustration along the way.

1. Opening the menu → mild anxiety

Users first dive into the hamburger menu hoping the process will be quick. The option isn’t immediately visible, so anticipation mixes with worry.
2. Account Settings → pleasant surprise

Inside Account Settings the “Close account” button is clearly labelled and high‑contrast. Participants appreciated how easy it was to spot (“The option is quite highlighted”).
3. First Confirmation → hesitation kicks in

A persuasive interstitial asks “Where are you going?” and nudges users to keep the account. Testers understood the prompt but some found the copy lengthy and clicked Close account without reading fully.
4. Account Transfer Step → useful but unexpected

Revolut encourages users to transfer any remaining balance. Most testers liked the practicality (“Oh! This is quite useful”), yet a few wondered why this wasn’t surfaced earlier in the flow.
5. Rewards Reminder → positive reassurance

A screen warns that rewards will be lost if the account is closed. Participants valued the transparency (“Good to know I can easily cancel”) but suggested condensing the text.
6. Data‑Storage Notice → strong negative reaction

The final step states that personal data must be retained for regulatory reasons. Almost all testers reacted negatively (“I don’t want them to keep my data!”) and requested clearer legal context and a timeframe for deletion.

### Key Takeaways

1. Findability is solid, but the journey starts with uncertainty because the entry point sits two taps deep.
2. Persuasive screens are informative yet word‑heavy; users skim rather than read.
3. Utility steps (balance transfer) are well received but feel out of sequence.
4. Data‑retention messaging erodes trust; users need clearer explanations and the option to request data removal once legally possible.
5. Overall ease is high, but emotional friction peaks at the end, exactly where confidence should be reinforced.

### Problem Statement

While Revolut offers a feature-rich banking experience, two critical user flows—creating an account and closing
one—present significant friction.
During onboarding, users often feel overwhelmed by the excessive number of screens and the lack of flexibility in navigating the process. Issues like difficulty finding one's professional category, lack of inclusivity in options, and the inability to go back to previous steps lead to frustration and abandonment.
On the other hand, the account cancellation journey, although shorter, suffers from poor visibility of key actions, lack of trust around data handling, and an unclear sense of closure. Users expressed doubt over whether their request was successfully completed and concern about what would happen to their stored data.
These insights revealed a clear need to streamline both flows, enhance user guidance, and build greater trust and control at every step of the journey.

### Persona

{{ persona(
name="João Pedro",
image="/assets/cases/revolut/persona.svg",
bio="João is a 32-year-old freelance graphic designer based in São Paulo, Brazil, working with clients across Europe and North America. With a passion for travel and cultural exploration, he often takes advantage of his remote lifestyle to live and work from different countries. Balancing personal and professional responsibilities on the go, João relies on digital tools that offer speed, simplicity, and flexibility. He’s tech-savvy, values clear communication, and seeks solutions that streamline his daily routines—especially when it comes to managing his finances across borders.",
    gains=[
        "Manage both personal and professional finances in one place",
        "Avoid high fees on international payments",
        "Save on currency conversions while traveling"
],
pains=[
    "High fees from traditional banks",
    "Lack of real-time financial control",
    "Outdated, slow, and unintuitive banking solutions"
],
needs=[
    "Simplified financial management",
    "Fair and transparent exchange rates",
    "Modern, user-friendly tools accessible anywhere in the world"
]
) }}

## Strategy

At this stage, the **main objective** was to define the **structure and behavior of the new website**, with a particular focus on the homepage. After identifying key structural issues in the existing website, a revised site map was developed to establish a clearer, more intuitive navigation framework.

![mna_2.png](/assets/cases/mnaa/sitemap.svg)

### Competitive analysis

To better understand the current landscape of digital banking onboarding and account cancellation experiences, we conducted a competitive analysis of five key players: N26, Wise, Monzo, Moey!, and Revolut. This comparison allowed us to identify best practices, recurring pain points, and areas where Revolut could improve its user experience. We focused on elements such as process clarity, navigation flexibility, and technical reliability across platforms.

<table class="align-wide">
    <tr>
        <th>Brand</th>
        <th>Positive Points</th>
        <th>Negative Points</th>
        <th>Notes to Retain</th>
    </tr>
    <tr>
        <td>N26</td>
        <td>
            <ul>
                <li>Clear and structured onboarding process</li>
                <li>"Go back" option always visible</li>
                <li>Screenshots disabled for security</li>
            </ul>
        </td>
        <td>
            <ul>
                <li>Overall process is lengthy</li>
                <li>Some steps lack clear explanations</li>
                <li>Waiting list to create an account</li>
            </ul>
        </td>
        <td>
            <ul>
                <li>Always include a "Return" button</li>
                <li>Consider a progress bar to manage expectations</li>
                <li>PIN code sent via message for extra security</li>
            </ul>
        </td>
    </tr>
    <tr>
        <td>Wise</td>
        <td>
            <ul>
                <li>Fast and concise onboarding</li>
                <li>"Go back" option always present</li>
                <li>Safety PIN sent via SMS</li>
            </ul>
        </td>
        <td>
            <ul>
                <li>Some screens are text-heavy, which may discourage users from reading</li>
            </ul>
        </td>
        <td>
            <ul>
                <li>Keep information brief and focused</li>
                <li>Use SMS for quick PIN Delivery</li>
            </ul>
        </td>
    </tr>
    <tr>
        <td>Monzo</td>
        <td>
            <ul>
                <li>-</li>
            </ul>
        </td>
        <td>
            <ul>
                <li>Waiting list required to open an account</li>
            </ul>
        </td>
        <td>
            <ul>
                <li>-</li>
            </ul>
        </td>
    </tr>
    <tr>
        <td>Moey!</td>
        <td>
            <ul>
                <li>Simple onboarding flow</li>
                <li>"Go back" button consistently available</li>
                <li>Easy introduction to product features</li>
            </ul>
        </td>
        <td>
            <ul>
                <li>No way to go back and correct information</li>
            </ul>
        </td>
        <td>
            <ul>
                <li>-</li>
            </ul>
        </td>
    </tr>
    <tr>
        <td>Revolut</td>
        <td>
            <ul>
                <li>-</li>
            </ul>
        </td>
        <td>
            <ul>
                <li>Cannot return to previous steps to edit data</li>
                <li>Camera usage for selfies and ID capture is unreliable on Android</li>
                <li>Address input is slow and not intuitive</li>
            </ul>
        </td>
        <td>
            <ul>
                <li>Consider skipping address initially and requesting it later if needed (e.g. for card delivery)</li>
                <li>Explore alternative authentication methods</li>
            </ul>
        </td>
    </tr>
</table>

### Wireframes

We started with paper wireframes to quickly sketch and explore possible directions for improving both the onboarding and account cancellation flows. One of our initial ideas was to introduce a progress bar in the onboarding process, breaking it down into four distinct stages to help users feel more guided. However, through early sketches and reflection, we realized this approach wasn’t effective—given the high number of screens involved, the progress indication would not accurately reflect the user’s true advancement. This phase was crucial in identifying such issues early on and setting a clear foundation for our digital wireframes.

![Paper wireframes](/assets/cases/revolut/paper.png)

Since we were tackling two different processes, we also explored early ideas for the account cancellation flow. Given that this journey is more straightforward compared to onboarding, we opted for a low-commitment approach using a digital low-fi prototype. This allowed us to piece together different elements and test out possible directions quickly without spending too much time on polished wireframes at this stage.

![Wireframe](/assets/cases/revolut/wireframe.png)

## Design

With the strategy clearly defined and initial ideas tested, we transitioned into the Design phase. This stage was focused on building clear, intuitive interfaces that improved the user experience across both onboarding and account cancellation flows. In terms of visual design, we chose to follow Revolut’s existing UI kit—adhering to the brand’s color palette, typography, and overall aesthetic. Our aim wasn’t to reinvent the visuals, but rather to make thoughtful UX-focused adjustments that simplify and enhance the overall user journey.

### UI Kit

![UI Kit](/assets/cases/revolut/ui.png)

### High Fidelity Prototype

With our visual guidelines in place, we moved on to building high-fidelity prototypes for both the onboarding and account cancellation flows. These screens reflect our UX refinements while maintaining visual consistency with the Revolut brand.

![High Fidelity Prototype](/assets/cases/revolut/high.png)

### Usability Testing

To evaluate the effectiveness of our proposed solutions, we conducted usability testing both before and after implementing our redesigns. In total, 6 tests were run during the initial phase (on the current solution) and again at the end (on our proposed solution). We focused on three key metrics: ease of use, perceived security, and process duration.

#### Ease of use

<div class="bg-white rounded-lg p-8">
<div class="font-bold">Before</div>
{% include "src/assets/cases/revolut/chart-4.svg" %}

<div class="font-bold mt-8">After</div>
{% include "src/assets/cases/revolut/chart-5.svg" %}

<div class="flex justify-between chart-label">
    <div>Very difficult</div>
    <div>Very easy</div>
</div>
</div>

#### Perceived security

<div class="bg-white rounded-lg p-8">
    <div class="font-bold">Before</div>
    {% include "src/assets/cases/revolut/chart-3.svg" %}
    
    <div class="font-bold mt-8">After</div>
    {% include "src/assets/cases/revolut/chart-5.svg" %}
    
    <div class="flex justify-between chart-label">
        <div>Very unsafe</div>
        <div>Very safe</div>
    </div>
</div>

#### Process duration

<div class="bg-white rounded-lg p-8">
<div class="font-bold">Before</div>
18 minutes and 20 seconds
{% include "src/assets/cases/revolut/speed-slow.svg" %}

<div class="font-bold mt-8">After</div>
8 minutes and 10 seconds
{% include "src/assets/cases/revolut/speed-fast.svg" %}
</div>
