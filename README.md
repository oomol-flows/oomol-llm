# LLM - AI Language Model Blocks for OOMOL

A collection of ready-to-use AI language model building blocks for the OOMOL platform, designed to help you create intelligent conversational workflows without writing code.

## What is This Project?

This project provides pre-built **blocks** (reusable components) that allow you to integrate AI language models into your OOMOL workflows. Think of blocks as LEGO pieces - you can connect them together to build powerful AI applications like chatbots, translators, content generators, and more.

## Who is This For?

- **Business users** who want to automate AI-powered tasks
- **Content creators** looking to leverage AI for text generation
- **Product managers** prototyping AI features
- **Anyone** interested in building AI workflows without programming

## Available Blocks

### 1. LLM Block
**What it does:** Communicates with AI language models to generate responses based on your prompts.

**Use cases:**
- Generate creative content (stories, poems, articles)
- Answer questions on any topic
- Transform or reformat text
- Analyze and summarize information

**Key features:**
- Customizable AI model selection
- Adjustable response creativity (temperature)
- Support for multi-turn conversations
- Automatic retry on connection failures

### 2. LLM Chat Block
**What it does:** Specialized block for building conversational experiences with memory of previous messages.

**Use cases:**
- Build customer support chatbots
- Create interactive tutoring systems
- Develop conversational assistants
- Design dialogue-based applications

**Key features:**
- Maintains conversation history
- Supports system instructions for AI behavior
- Stream responses in real-time
- Configurable timeout and retry settings

### 3. Messages Generator Block
**What it does:** Prepares and formats conversation messages for AI models using templates.

**Use cases:**
- Create dynamic prompts with variable inputs
- Format multi-turn conversations
- Build reusable prompt templates
- Prepare structured data for AI processing

**Key features:**
- Template-based message creation
- Support for system, user, and assistant roles
- Variable substitution (e.g., `{{input}}`)
- Combines existing conversations with new messages

## Common Use Cases

### 💬 Customer Support Bot
Connect the **LLM Chat** block to handle customer inquiries with context-aware responses.

### 🌐 Translation Service
Use the **LLM** block with translation prompts to convert text between languages.

### ✍️ Content Generation
Combine the **Messages Generator** and **LLM** blocks to create articles, emails, or social media posts.

### 📊 Data Analysis Assistant
Feed data into the **LLM** block to get summaries, insights, and recommendations.

## Getting Started

1. **Install the Package:** Import this LLM package into your OOMOL platform
2. **Choose Your Block:** Select the block that fits your use case
3. **Configure Settings:**
   - Select your preferred AI model
   - Adjust response parameters (temperature, max tokens)
   - Set up your prompt template
4. **Connect Your Flow:** Link blocks together to create your workflow
5. **Test & Run:** Execute your flow and see the AI in action!

## Configuration Guide

### Model Selection
Choose from various AI models based on your needs:
- **deepseek-chat** (default): Fast and cost-effective
- Other supported models available in the model selector

### Response Control
- **Temperature** (0-1): Controls creativity (0 = focused, 1 = creative)
- **Top P** (0-1): Controls response diversity
- **Max Tokens**: Limits response length

### Retry & Timeout
- **Timeout**: Maximum wait time for responses (default: 30 seconds)
- **Retry Times**: Number of automatic retries on failure (default: 0)
- **Retry Sleep**: Delay between retries (default: 3.5 seconds)

## Example Workflows

This project includes sample workflows in the `flows/` directory:

- **chat**: Interactive chatbot example
- **translate**: Language translation workflow
- **history**: Conversation with context memory

## Support & Resources

- **Repository:** [https://github.com/oomol-flows/oomol-llm](https://github.com/oomol-flows/oomol-llm)
- **OOMOL Platform:** Learn more about building visual workflows at [OOMOL website]

## Version

Current version: **0.3.5**

## License

Check the repository for license information.

---

**Ready to build your first AI workflow?** Import this package into OOMOL and start connecting blocks!
