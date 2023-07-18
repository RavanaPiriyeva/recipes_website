import React from "react";
import "../style/layout/about.scss";

function About() {
  return (
    <div className="about">
      <div className="logo_part">
        <h1>
          Tasty Food <br />
          <span>Collections</span>
        </h1>
      </div>
      <div className="descr_part">
        <h1>Who We Are</h1>
        <p>Simply Recipes is here to help you cook delicious meals with less stress and more joy. We offer recipes and cooking advice for home cooks, by home cooks. Helping create “kitchen wins” is what we’re all about.
        Simply Recipes was founded in 2003 by Elise Bauer as a home cooking blog to record her favorite family recipes. Today, Simply Recipes has grown into a trusted resource for home cooks with more than 3,000 tested recipes, guides, and meal plans, drawing over 15 million readers each month from  around the world. We’re supported by a diverse group of recipe developers, food writers, recipe and product testers, photographers, and other  creative professionals.
        </p>
        <h1>Our History</h1>
        <p>
        Elise Bauer was a busy Silicon Valley executive when she became sick with a flu that wouldn’t go away in 2001. In 2003, Elise moved home with her parents and lived with them for several years, recovering from chronic fatigue and documenting her parents’ cooking on Simply Recipes. Here’s more of that story.Over the years, what started as a small blog grew to reach millions of readers every month! In 2020, Simply Recipes was acquired by Dotdash Meredith, a New York-based media company.
        </p>
        <h1>Recipe Development Testing</h1>
        <p>Our recipes primarily use fresh, unprocessed ingredients but we also believe there is a time and a place for canned, frozen, and other prepared ingredients. We believe in a diet that includes a wide variety of foods: real butter and cream, extra virgin olive oil, eggs, lots of fruits and vegetables, and protein from meat, fish, beans, and cheese. Plus cake for dessert.</p>
      </div>
    </div>
  );
}

export default About;
