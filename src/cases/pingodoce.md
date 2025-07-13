---
title: "UX for Sustainability: Helping Users Cook Just Enough"
layout: cases.njk
tags: cases
excerpt: The challenge was to help reduce food waste through a new app feature. Our solution was a portion calculator, designed to help users better plan their meals by adjusting ingredient quantities based on recipe type and cooking experience.
image: /assets/cases/pingodoce/og.png
---

{% from "components/note.njk" import note %}
{% from "components/figma.njk" import figma %}
{% from "components/persona.njk" import persona %}

## Overview

**Pingo Doce** is one of Portugal’s leading supermarket chains, with a strong marketing presence and a well-established connection to traditional Portuguese cuisine through cookbooks and recipe promotions. This focus on food culture made it a natural fit for our team’s project, where we were free to choose a brand to design for.

The challenge was to help reduce food waste through a new app feature. Our solution was a portion calculator, designed to help users better plan their meals by adjusting ingredient quantities based on recipe type and cooking experience.

Developed collaboratively, the project covered the full design process; from user research to prototyping; with the goal of creating a tool that is both sustainable and aligned with Pingo Doce’s brand values.

## Process

<img src="/assets/images/process.svg" alt="Process diagram showing the design methodology" />

## Discovery

Food waste is a growing concern in Portugal, with each person throwing away about 184 kg of food annually, costing around €350 per year. This makes Portugal one of the top food-wasting countries in Europe. Beyond the financial loss, this waste contributes to CO₂ emissions and the unnecessary use of thousands of liters of water.

Given Pingo Doce’s strong connection to Portuguese cuisine and its promotion of recipes and cookbooks, this project saw an opportunity to align with their brand while addressing a real problem. The goal: design a portion calculator feature that helps users plan meals more accurately and cut down on waste.

## Research

To better understand the problem, validate our chosen brand and feature, and define our target audience, a questionnaire was conducted. From 114 total responses, 106 were valid, coming from people who actively cook. Among them, 91 reported difficulties with portioning, reinforcing the relevance of our solution.

### Results

<div class="flex flex-col items-center">
    
    <img src="/assets/cases/pingodoce/9in10.svg" alt="9 in 10 respondents reported difficulties with portioning" />
    
    <p class="!mb-8">9 in 10 respondents reported difficulties with portioning.</p>
    
    <img src="/assets/cases/pingodoce/7in10.svg" alt="7 in 10 respondents reported difficulty when cooking for 4+ people" />
    
    7 in 10 respondents reported difficulty when cooking for 4+ people

    <div class="mt-16">
    <strong>65%</strong> Recipe websites
        <img src="/assets/cases/pingodoce/top-1.svg" alt="Recipe websites icon" />
    </div>
    <div class="mt-8">
    <strong>59%</strong> Social media
        <img src="/assets/cases/pingodoce/top-2.svg" alt="Social media icon" />
    </div>
    <div class="mt-8 mb-16">
    <strong>34%</strong> Supermarket websites
        <img src="/assets/cases/pingodoce/top-3.svg" alt="Supermarket websites icon" />
    </div>

Although 92% of people cook at least once a week, they only search for recipes online occasionally. Supermarket websites are among the top three places users search for recipes, yet the Pingo Doce app does not currently offer this functionality.

</div>

### Key Issues Identified

1. **Clear and Visual Measurements**
   Users want precise, easy-to-understand measurements with practical tools like visual aids, tables, or built-in calculators to simplify quantity estimation.
2. **Recipe Flexibility**
   Users want recipes that can be easily adjusted based on the number of people, with clear indications of portion sizes per person.
3. **Automatic Ingredient Converter**
   Participants highlighted the need for an automatic converter to adjust ingredients while keeping the intended number of servings consistent.
4. **Scalable Recipes**
   Users value recipes that are easy to scale up or down, with accurate ingredient quantities per person and real-life kitchen measurements like spoons or cups.
5. **Simple, Universal Units**
   Many requested the use of everyday, intuitive measurements; like tablespoons and cups; over complex units such as grams, to make cooking more approachable.

### Problem Statement

Although most participants cook regularly; 92% at least once per week; the majority experience recurring difficulties with portioning, especially when preparing meals for larger groups (4+ people). This issue affects 87% of respondents, with younger adults (18–35) and women making up the bulk of the affected audience.

Despite frequent cooking, people only search for recipes online occasionally, relying mostly on recipe websites, social media, and supermarket platforms. When they do, they encounter recipes that are hard to scale, lack intuitive measurements, or don’t clearly indicate quantities per person.

There is a clear opportunity to create a tool that supports everyday cooks with simple, flexible, and user-friendly portioning features, helping them reduce food waste and plan meals more effectively.

### Persona

{{ persona(
name="Maria Robalo",
image="/assets/cases/pingodoce/persona.svg",
bio="Maria Robalo is a 28-year-old Digital Project Manager who cares deeply about sustainability and healthy living. She thrives in social settings, loves cooking for others, and often hosts friends and family at home. Organized and curious, she’s always looking for balanced, eco-conscious choices, and often finds cooking inspiration through digital channels. She values aesthetics and believes that food should be appealing, healthy, and socially meaningful.",
bulletPoints=["Age: 55 years old", "European", "Passionate about history and culture", "Likes to visit museums and photography"],
gains=[ "Saving time by not having to do manual conversions.",
        "Feeling confident in the accuracy of quantities.",
        "Cooking for guests or family without guessing portions.",
        "Using sustainable amounts and reducing food waste."],
pains=[ "Confusing or inconsistent measurement units (especially grams).",
        "Recipes that don’t scale easily for different group sizes.",
        "Having to manually recalculate ingredients for more people.",
        "Lack of clarity around how much is “enough” per person."],
needs=[ "Recipes that adjust easily to different serving sizes.",
        "Intuitive and visual measurement aids (e.g., spoons, cups, calculators).",
        "Clear, consistent portion guidance to reduce waste.",
        "A way to understand ingredient amounts at a glance."]
) }}

## Strategy

To shape our strategy, we began by outlining the task flow for the feature. This allowed us to clarify the essential steps for a smooth user experience, ensuring we included only what was necessary while eliminating any friction or redundant actions.
<img src="/assets/cases/pingodoce/strategy.svg" alt="Strategy diagram showing the task flow for the portion calculator feature" />

### Competitive analysis

To define our strategy, we analyzed various cooking and recipe platforms to understand how they tackle portioning, recipe customization, and usability. Our goal was to identify both inspiration and opportunities for innovation. Below is a visual breakdown of our key takeaways:

<div class="align-wide">
<div class="scroll-table">
    <table>
        <tr>
            <th>Platform</th>
            <th>Strengths</th>
            <th>Weaknesses</th>
            <th>What we can learn</th>
        </tr>
        <tr>
            <td>Cookpad</td>
            <td>
                <ul>
                    <li>Create, save & share recipes</li>
                    <li>Search by ingredient</li>
                    <li>Personal collections</li>
                </ul>
            </td>
            <td>
                <ul>
                    <li>Units not always clear</li>
                    <li>No clear substitutes</li>
                    <li>No portion adjustability</li>
                </ul>
            </td>
            <td>Add portion control & ability to filter recipes by servings</td>
        </tr>
        <tr>
            <td>BigOven</td>
            <td>
                <ul>
                    <li>Edit servings easily</li>
                    <li>Clear recipe structure</li>
                    <li>Shopping list option</li>
                </ul>
            </td>
            <td>Adding ingredients to list is unintuitive</td>
            <td>Streamline shopping list integration</td>
        </tr>
        <tr>
            <td>Love Food Hate Waste</td>
            <td>
                <ul>
                    <li>Visual portion calculator</li>
                    <li>Differentiates adults/teens</li>
                </ul>
            </td>
            <td>Doesn't adapt recipes, only gives proportion suggestions</td>
            <td>Integrate true recipe adaptation with portion calculator</td>
        </tr>
        <tr>
            <td>Cookidoo</td>
            <td>Suggests utensil-based measurements (e.g., spoon/cup)</td>
            <td>Can only adjust in fixed steps (e.g., 2 to 4 portions)</td>
            <td>Include granular controls for portion size</td>
        </tr>
        <tr>
            <td>PetChef</td>
            <td>
                <ul>
                    <li>Estimates cost per person</li>
                    <li>Includes utensil-based measurements</li>
                </ul>
            </td>
            <td>Only one metric</td>
            <td>Expand metric options and serving flexibility</td>
        </tr>
        <tr>
            <td>Tastemade</td>
            <td>
                <ul>
                    <li>Nutritional info & diet filters</li>
                    <li>Adapts recipes based on input</li>
                </ul>
            </td>
            <td>Serving limit of 99</td>
            <td>Prioritize feature accessibility and consistent recipe adaptability</td>
        </tr>
        <tr>
            <td>SideChef</td>
            <td>
                <ul>
                    <li>Multiple metric options</li>
                    <li>Minimal interface</li>
                </ul>
            </td>
            <td>
                <ul>
                    <li>Max 96 servings</li>
                    <li>Metric choices may confuse users</li>
                </ul>
            </td>
            <td>Keep UI intuitive and avoid arbitrary serving caps</td>
        </tr>
        <tr>
            <td>Continente Recipes</td>
            <td>
                <ul>
                    <li>Clean structure</li>
                    <li>Shopping list integration</li>
                    <li>Clear layout</li>
                </ul>
            </td>
            <td>
                <ul>
                    <li>No portion adjustment</li>
                    <li>Menu overlaps recipe content</li>
                </ul>
            </td>
            <td>Optimize layout and allow dynamic serving input</td>
        </tr>
        <tr>
            <td>Lidl Recipes</td>
            <td>
                <ul>
                    <li>Allows adjusting servings</li>
                    <li>Clear recipe display</li>
                </ul>
            </td>
            <td>No ingredient-to-shopping list feature</td>
            <td>Add full integration between recipes and grocery planning</td>
        </tr>
    </table>
</div>
</div>

### Key Takeaways

<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 text-center align-wide mb-16">
    {% macro recommendation(image, title, description) %}
    <div class="note justify-center h-full">
        {% if image.endsWith('.svg') %}
        <img src="{{ image | url }}" alt="{{ title }}" />
        {% else %}
        {% image image, title %}
        {% endif %}
        <strong>{{ title }}</strong>
        <p class="text-sm" style="margin-block: 0;">{{ description }}</p>
    </div>
    {% endmacro %}

    {{ recommendation(
        image="/assets/cases/pingodoce/01.svg",
        title="Clarity & Simplicity",
        description="Users prefer universal, visual measurements (e.g., cups, spoons) over grams."
    ) }}
    {{ recommendation(
        image="/assets/cases/pingodoce/02.svg",
        title="Flexibility is Crucial",
        description="Many tools fall short by limiting serving adjustments or only giving proportional hints."
    ) }}
    {{ recommendation(
        image="/assets/cases/pingodoce/03.svg",
        title="Recipe Adaptability",
        description="It's not enough to scale ingredients; the app must adapt recipes while maintaining clarity."
    ) }}
    {{ recommendation(
        image="/assets/cases/pingodoce/04.svg",
        title="Integration Adds Value",
        description="Merging features like shopping lists, nutrition info, and portion control adds real usability."
    ) }}

</div>

### Wireframes

{% image "src/assets/cases/pingodoce/wireframe.png", "Wireframe showing the portion calculator interface design" %}

## Design

Finally, it was time to bring the ideas to life. Building on insights from the previous phase, the focus shifted to defining the visual direction of the final design. Key decisions were made around color palette, typography and hierarchy, iconography, and other UI elements to ensure a cohesive and accessible user experience.

### UI Kit

{% image "src/assets/cases/pingodoce/design-01.png", "UI Kit showing color palette and design system" %}
{% image "src/assets/cases/pingodoce/design-02.png", "UI Kit showing typography and component design" %}
{% image "src/assets/cases/pingodoce/design-03.png", "UI Kit showing iconography and interface elements" %}

### High Fidelity Prototype

After refining the wireframes based on user feedback, the project moved into the high-fidelity wireframing phase. This stage focused on translating the improved structure and functionality into a visually accurate design, incorporating the final layout, branding elements, and interactive components to closely reflect the final user experience.

{{ figma("https://embed.figma.com/proto/xR1mc6ZWmunasnjJ35Zuir/Food-App-Pingo-Doce--Copy-?page-id=884%3A4029&node-id=884-4141&viewport=744%2C1358%2C0.34&scaling=scale-down&content-scaling=fixed&starting-point-node-id=884%3A4141&embed-host=share", {"aspect-ratio": "9/16"})}}
