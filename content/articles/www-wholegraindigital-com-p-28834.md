---
title: "New Cloudflare features offer more control over what AI companies can access on your site"
date: 2026-09-21T09:53:19.000Z
source: "Wholegrain Digital"
language: "en"
link: "https://www.wholegraindigital.com/blog/new-cloudflare-features-offer-more-control-over-what-ai-companies-can-access-on-your-site/"
description: "I don’t know about other people but I often feel like AI is something that’s imposed upon me, rather than something I’ve chosen to engage with. AI features are added to software products whether you want them or not. AI search has changed the way I find information and track site metrics. Discourse..."
author: "Andy Davies"
guid: "https://www.wholegraindigital.com/?p=28834"
categories:
  - "Uncategorised"
draft: false
---

I don’t know about other people but I often feel like AI is something that’s imposed upon me, rather than something I’ve chosen to engage with. AI features are added to software products whether you want them or not. AI search has changed the way I find information and track site metrics. Discourse in the tech world, sustainability focussed or otherwise is overwhelmed by AI and big data centers.

It makes it hard to feel in control when it comes to AI. Which is what makes the announcements Cloudflare made this week so intriguing and maybe even hopeful. Have site managers been granted a modicum of control when it comes to how AI interacts with their websites?

Let’s find out.

Cloudflare offers security and content delivery services and is used by just over 20% of sites on the internet. As a service provider they’ve been dealing with some of the infrastructural issues that AI presents since the beginning. AI platforms use crawlers to gather information to provide search and chatbot users as well as hoover up content for model training. For Cloudflare and the sites using it, that can cause issues.

Huge numbers of crawlers hitting multiple site pages at the same time can act in the same way as a DDOS attack. This can overwhelm hosting servers, rendering sites temporarily unavailable or slow and unresponsive. Not only that but bots can also quietly chew through bandwidth quotas, leaving organisations with increased site hosting bills for little to no increase in site visitors or engagement.

How to deal with AI crawlers, scrapers and bots has been a fundamental question for Cloudflare. After much discussion and behind the scenes negotiations, it appears they are coming up with some interesting answers. 

Content Independence

Recent announcements have their origins in 2025’s declaration that July 1st is “Content Independence Day”. Since the early days of the internet there has been a co-dependency between search engines and content owners. Search engines need content creators to bring users to their platforms. Content creators need search engines to make their content discoverable for a wider audience. Cloudflare and others contend that chatbots and Google’s AI summaries and search results constitute a breaking of this agreement.

“Content is the fuel that powers AI engines, and so it's only fair that content creators are compensated directly for it.”

This year, their second Content Independence Day was marked with two significant announcements: A “pay to crawl” framework and more options for content independence. They detailed new options to allow a more granular and nuanced approach to bot and AI traffic. The new features came into effect on September 15th and are worth exploring, not only for the options they provide to organisations but also the reasoning behind them.

Maintain discoverability AND choice

Cloudflare’s new features reflect an issue that web managers have been grappling with for a few years. If you want your website to be discoverable, the price is that your content will be used to train AI models. This happened because the major players in the field, Google and the like, use what they call “mixed-use” crawlers. These crawlers performed a dual role for training AI models and search indexing. The choice was binary, refuse both or allow both, with no middle ground.

This “either/or” choice didn’t reflect the nuance involved. There are myriad reasons why an organisation might want to opt out of training AI:

Infrastructure Grounds — Wikipedia reported stability issues due to high bandwidth usage by AI crawlers

Reputational Grounds — A topic like the holocaust is an emotive matter of historical fact that is called into question by bad actors. Telling the truth about it unflinchingly, definitively and authoritatively is a moral imperative. How do you approach discoverability on LLMs for this topic?

Ethical Grounds – Organisations working to protect Data Workers’ rights in Africa and Asia might legitimately want to ban AI access while remaining discoverable in search

Solutions for this dilemma have been tricky to find. In the past robots.txt has represented a “gentlemen's agreement” as to who and what can access areas of your website. Recent times have seen this agreement ignored by crawlers and scrapers. Cloudflare has been working directly with AI operators to help people take back control. They’ve gained their that their bots will meet the following requirements:

A mechanism for site owners to opt out of AI training, through robots.txt or a similar standard.

A mechanism for site owners to opt out of AI summaries set with the operator directly

URL-level visibility into which pages were made available for training, along with metrics showing how content appeared in search.

Assurance that opting out of AI training will not affect traditional search results.

These requirements along with Cloudflare classifying bots by behaviour and intention help users of the platform have more control. They classify three behaviours:

Search – crawling to build a search index.

Training – crawling to train or fine-tune a model.

Agent – user-directed agents visiting a page on behalf of a human, such as chat fetch bots and browser-use agents.

By classifying these behaviours, you can allow a mixed use crawler to carry out search indexing while blocking content from training. Cloudflare claims that taking actions to disallow training bots will not affect search performance or rankings.

These new controls are already in place. You don’t need to make changes unless you want to. If you are using Cloudflare we would encourage you to check your settings and confirm that they reflect your requirements.

An opportunity to discuss your AI access

Moreover, this change represents an opportunity to think about your sites’ relationship with LLMs and search summaries. If you’ve been uncomfortable with compromises you’ve had to make, now might be the time to see if you still need to make those compromises. Much has been written about the threat AI search and chatbots pose to discoverability and open web principles. Cloudflare taking this option shows big AI companies that they’ve had it their own way for a little too long.

Could this be the start of some rebalancing? I certainly hope so.

If you’re a Wholegrain client and would like to explore what this new functionality could mean for your site, please get in touch with your project or account manager.

If you’re a prospective client affected by some of the issues outlined in the article and want to speak to someone about them, contact Chris to see how we can help.

The post New Cloudflare features offer more control over what AI companies can access on your site appeared first on Wholegrain Digital.