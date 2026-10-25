<div align="center">

```
███████╗██████╗ ███████╗███████╗     █████╗ ██╗
██╔════╝██╔══██╗██╔════╝██╔════╝    ██╔══██╗██║
█████╗  ██████╔╝█████╗  █████╗      ███████║██║
██╔══╝  ██╔══██╗██╔══╝  ██╔══╝      ██╔══██║██║
██║     ██║  ██║███████╗███████╗    ██║  ██║██║
╚═╝     ╚═╝  ╚═╝╚══════╝╚══════╝    ╚═╝  ╚═╝╚═╝
```

# 🧠 Free AI Bible 2026
### Free AI APIs, Tools & Local Models for Developers

**Your next AI project might need fewer subscriptions than you think.**

Discover free LLM APIs, generate images, run models offline, and build with ready-to-use starters.

[![Stars](https://img.shields.io/github/stars/abbosaliboev/free-ai-bible?style=for-the-badge&color=yellow)](https://github.com/abbosaliboev/free-ai-bible/stargazers)
[![PRs Welcome](https://img.shields.io/badge/PRs-Welcome-blue?style=for-the-badge)](CONTRIBUTING.md)
[![License: MIT](https://img.shields.io/badge/License-MIT-red?style=for-the-badge)](LICENSE)

**[🔎 Explore the searchable directory](https://abbosaliboev.github.io/free-ai-bible/catalog.html)** · **[⚡ Quick start](#quick-start)** · **[🤝 Contribute](#contributing)**

🌐 [العربية](translations/README.ar.md) | [中文](translations/README.zh-CN.md) | [한국어](translations/README.ko.md) | [Español](translations/README.es.md) | [Русский](translations/README.ru.md) | [日本語](translations/README.ja.md) | [O‘zbek](translations/README.uz.md)

</div>

---

> 💛 **Keep this toolbox within reach.** If it saves you time, give it a ⭐ and share it with one developer who needs it.

## 🤔 Why does this repo exist?

A chatbot. A document search tool. A voice assistant. Your next side project.

You can start building all of these with free-tier APIs and local AI tools. The hard part is finding the right combination without spending your weekend comparing pricing pages.

**That's what this repo is for:** discover your options, pick a stack, and get to the code.

No affiliate links. No paid placement. Open to everyone.

## 📋 Jump straight to what you need

| | | |
|---|---|---|
| [🔥 LLM APIs](#llm-apis) | [🎨 Image generation](#image-tools) | [🖥️ Local AI](#local-tools) |
| [💻 Coding assistants](#coding-tools) | [📦 Embeddings & RAG](#rag-tools) | [🎙️ Speech & audio](#audio-tools) |
| [🧠 Open models](#open-models) | [🤖 Agents & workflows](#agent-tools) | [🚀 Model serving](#hosting-tools) |

<a id="pick-your-stack"></a>

## ⚡ What are you building?

| Your next project | Start with | Ready-to-run example |
|---|---|---|
| 💬 Streaming chatbot | Groq + Python | [Chatbot starter →](templates/chatbot-groq/) |
| 📄 Chat with your documents | Ollama + Chroma | [Local RAG starter →](templates/rag-pipeline-free/) |
| 🎨 Image generation API | Stable Diffusion + FastAPI | [Image API starter →](templates/image-gen-api/) |
| 🎙️ Voice assistant | Whisper + Groq + pyttsx3 | [Voice starter →](templates/voice-assistant/) |
| 🦙 Offline chat | Ollama + Qwen3 | [Local setup →](scripts/setup-ollama.sh) |

**Can't decide?** [Choose an LLM API](comparison-charts/which-llm-api.md) · [Pick an image workflow](comparison-charts/image-gen-picker.md) · [Local vs cloud](comparison-charts/local-vs-cloud.md)

<a id="directory"></a>

## 🧰 The toolbox

**☁️ Free tier** = hosted service with usage limits. **🖥️ Local** = run it yourself using your own hardware. Full limits, licenses and dated sources are in the [searchable directory](https://abbosaliboev.github.io/free-ai-bible/catalog.html).

<!-- CATALOG:START -->
**73 resources to explore.** Search, filter and save your favorites in the [interactive directory](https://abbosaliboev.github.io/free-ai-bible/catalog.html).

<a id="llm-apis"></a>

### 🔥 Free LLM APIs

| Tool | What you can do | Free access |
|---|---|---|
| [**Groq**](https://console.groq.com) | Streaming chat & speech APIs | Model-specific free limits |
| [**Google AI Studio**](https://aistudio.google.com) | Gemini text, vision & prototyping | Free on eligible models |
| [**Mistral AI**](https://mistral.ai) | Experiment with Mistral models | Free plan; account limits apply |
| [**Cerebras**](https://cerebras.ai) | Hosted LLM inference | Free tier with lower limits |
| [**Cloudflare Workers AI**](https://developers.cloudflare.com/workers-ai) | Run inference at the edge | 10,000 neurons/day on eligible models |
| [**OpenRouter**](https://openrouter.ai) | Try models through one API | 50 free-plan requests/day |

<details>
<summary>🔎 More tools to explore — current free access needs a fresh check</summary>

[Cohere](https://cohere.com) · [Together AI](https://together.ai) · [Novita AI](https://novita.ai)

Check the current plan before signing up. [Help update an entry →](CONTRIBUTING.md)

</details>

<a id="image-tools"></a>

### 🎨 Image Generation

| Tool | What you can do | Free access |
|---|---|---|
| [**FLUX.1 schnell**](https://github.com/black-forest-labs/flux/blob/main/README.md) | Generate images with downloadable weights | Local · Apache-2.0 variant |

<details>
<summary>🔎 More tools to explore — current free access needs a fresh check</summary>

[Stable Diffusion (Local)](https://github.com/AUTOMATIC1111/stable-diffusion-webui) · [Leonardo.ai](https://leonardo.ai) · [Adobe Firefly](https://firefly.adobe.com) · [Ideogram](https://ideogram.ai) · [Flux (via Replicate)](https://replicate.com) · [Kling AI](https://klingai.com) · [Hailuo AI](https://hailuoai.com) · [Craiyon](https://www.craiyon.com) · [Pika Labs](https://pika.art)

Check the current plan before signing up. [Help update an entry →](CONTRIBUTING.md)

</details>

<a id="local-tools"></a>

### 🖥️ Run AI on Your Own Machine

| Tool | What you can do | Free access |
|---|---|---|
| [**Ollama**](https://ollama.com) | Download a model and start chatting | Local |
| [**ComfyUI**](https://github.com/comfyanonymous/ComfyUI) | Build image & video workflows visually | Local |
| [**llama.cpp**](https://github.com/ggml-org/llama.cpp) | Run GGUF models on CPU or GPU | Local |
| [**MLX LM**](https://github.com/ml-explore/mlx-lm) | Run & fine-tune models on Apple silicon | Local · compatible Mac required |
| [**Unsloth**](https://github.com/unslothai/unsloth) | Run & fine-tune supported models | Local · hardware varies |
| [**agent-qa**](https://github.com/vostride/agent-qa) | Self-improving web/mobile QA with memidex memory; free for permitted use, with configured-provider costs separate. | local |

<details>
<summary>🔎 More tools to explore — current free access needs a fresh check</summary>

[LM Studio](https://lmstudio.ai) · [Whisper (local)](https://github.com/openai/whisper) · [Anything LLM](https://anythingllm.com) · [LocalAI](https://localai.io) · [Jan.ai](https://jan.ai) · [Open WebUI](https://github.com/open-webui/open-webui)

Check the current plan before signing up. [Help update an entry →](CONTRIBUTING.md)

</details>

<a id="coding-tools"></a>

### 💻 AI Coding Assistants

| Tool | What you can do | Free access |
|---|---|---|
| [**Aider**](https://aider.chat/docs/faq.html) | Pair-program from your terminal | Free software; bring a model |
| [**Continue**](https://github.com/continuedev/continue) | Code with a configurable AI agent | Free software; bring a model |

<a id="open-models"></a>

### 🧠 Open Models to Explore

| Tool | What you can do | Free access |
|---|---|---|
| [**Qwen3**](https://github.com/QwenLM/Qwen3) | Multilingual chat & reasoning, including Arabic | Local · Apache-2.0 releases |
| [**EmbeddingGemma**](https://deepmind.google/models/gemma/embeddinggemma/) | Compact multilingual embeddings | Local · Gemma terms |

<a id="rag-tools"></a>

### 📦 Embeddings, Documents & RAG

| Tool | What you can do | Free access |
|---|---|---|
| [**Chroma (local)**](https://trychroma.com) | Store & search document embeddings | Local |
| [**Docling**](https://github.com/docling-project/docling) | Turn documents into AI-ready data | Local |
| [**MarkItDown**](https://github.com/microsoft/markitdown) | Convert files to Markdown | Local · optional API integrations |
| [**Qdrant (local)**](https://github.com/qdrant/qdrant) | Self-host vector search | Local |
| [**pgvector**](https://github.com/pgvector/pgvector) | Add vector search to Postgres | Local |
| [**Sentence Transformers**](https://github.com/huggingface/sentence-transformers) | Generate embeddings & rerank results | Local · choose a model |
| [**RAGFlow**](https://github.com/infiniflow/ragflow) | Build document retrieval workflows | Self-hosted · needs server resources |
| [**Qdrant Cloud**](https://qdrant.tech/pricing/) | Managed vector search | Free cluster: 1 GB RAM / 4 GB disk |

<details>
<summary>🔎 More tools to explore — current free access needs a fresh check</summary>

[Supabase pgvector](https://supabase.com) · [Pinecone](https://pinecone.io) · [Weaviate Cloud](https://weaviate.io) · [Cohere Embed](https://cohere.com) · [Nomic Embed](https://nomic.ai)

Check the current plan before signing up. [Help update an entry →](CONTRIBUTING.md)

</details>

<a id="audio-tools"></a>

### 🎙️ Speech, Audio & Transcription

| Tool | What you can do | Free access |
|---|---|---|
| [**whisper.cpp**](https://github.com/ggml-org/whisper.cpp) | Transcribe speech with a C/C++ runtime | Local |
| [**faster-whisper**](https://github.com/SYSTRAN/faster-whisper) | Run Whisper with CTranslate2 | Local |
| [**Qwen3-ASR**](https://github.com/QwenLM/Qwen3-ASR) | Recognize multilingual speech, including Arabic | Local |
| [**Qwen3-TTS**](https://github.com/QwenLM/Qwen3-TTS) | Generate speech & design voices | Local · check language support |

<details>
<summary>🔎 More tools to explore — current free access needs a fresh check</summary>

[Deepgram](https://deepgram.com) · [ElevenLabs](https://elevenlabs.io) · [Whisper (OpenAI)](https://openai.com/research/whisper) · [Suno](https://suno.com) · [Udio](https://udio.com) · [AssemblyAI](https://assemblyai.com)

Check the current plan before signing up. [Help update an entry →](CONTRIBUTING.md)

</details>

<a id="agent-tools"></a>

### 🤖 Build Agents & Workflows

| Tool | What you can do | Free access |
|---|---|---|
| [**LiteLLM**](https://github.com/BerriAI/litellm) | Connect model providers through one gateway | Self-hosted core; model calls separate |
| [**Flowise**](https://github.com/FlowiseAI/Flowise) | Build AI workflows with a visual editor | Self-hosted core; model calls separate |
| [**Dify**](https://github.com/langgenius/dify) | Create agents & RAG applications | Self-hosted · Dify license applies |
| [**smolagents**](https://github.com/huggingface/smolagents) | Build lightweight model-powered agents | Free framework; bring a model |

<a id="hosting-tools"></a>

### 🚀 Model Serving & Hosting

| Tool | What you can do | Free access |
|---|---|---|
| [**vLLM**](https://github.com/vllm-project/vllm) | Serve supported LLMs yourself | Free software; server costs apply |

<details>
<summary>🔎 More tools to explore — current free access needs a fresh check</summary>

[Hugging Face Spaces](https://huggingface.co/spaces) · [Google Colab](https://colab.research.google.com) · [Modal](https://modal.com) · [Vercel](https://vercel.com) · [Railway](https://railway.app) · [Render](https://render.com) · [Replicate](https://replicate.com) · [Cloudflare Workers](https://workers.cloudflare.com) · [Kaggle Notebooks](https://kaggle.com)

Check the current plan before signing up. [Help update an entry →](CONTRIBUTING.md)

</details>

<!-- CATALOG:END -->

---

<a id="quick-start"></a>

## ⚡ From browsing to building

### 🦙 Option A — Run an AI model locally

Install [Ollama](https://ollama.com/download) for your OS, then:

```bash
ollama pull qwen3:4b
ollama run qwen3:4b
```

**That's your first local chat.** After downloading the model, local inference can run offline. Choose a model size that fits your memory.

### 💬 Option B — Build a streaming chatbot

Get a free-tier API key from [Groq](https://console.groq.com), then run from the repo root:

```bash
cd templates/chatbot-groq
python3 -m venv .venv
source .venv/bin/activate
python -m pip install -r requirements.txt
export GROQ_API_KEY=your_key_here
python app.py
```

On Windows, activate with `.venv\Scripts\activate` and set `GROQ_API_KEY` using your shell's environment-variable syntax.

### 📄 Option C — Chat with your own documents

Start with the [local RAG template](templates/rag-pipeline-free/): Ollama for answers, a dedicated embedding model, and Chroma for search. Swap the sample text for your own documents.

> 💡 More to build: [image generation API](templates/image-gen-api/) · [voice assistant](templates/voice-assistant/) · [setup scripts](scripts/)

## 🆕 More tools. More ways to build.

The October update adds **24 resources**, including Qwen3, Qwen3-ASR/TTS, Continue, Aider, Docling, EmbeddingGemma and more. There's now an **Arabic guide**, plus **search, filters, favorites and CSV/JSON downloads** in the directory.

[See what's new →](CHANGELOG.md)

<details>
<summary>📌 A quick note about free tiers and sources</summary>

Free allowances change by model, account and region. Local software still needs hardware and may have optional paid integrations. “Docs reviewed” means the official page was checked on the recorded date, not that every account, model or billing flow was tested.

Hugging Face Inference Providers currently lists no monthly credits for free accounts; downloading models for local use is separate. Groq limits vary by model, and some Cloudflare Workers AI models require payment.

[Official sources and full details](https://abbosaliboev.github.io/free-ai-bible/catalog.html) · [Review policy](docs/VERIFICATION.md) · [JSON](data/resources.json) · [CSV](data/resources.csv)

</details>

---

<a id="contributing"></a>

## 🤝 Make this toolbox better

**Know a useful tool? Found a changed limit? Tried a starter? Bring it back here.**

1. Pick a resource or a [small starter task](docs/GOOD_FIRST_ISSUES.md).
2. Add a tool, fix a limit, test an example, or improve a translation.
3. Open a PR with the official source and what you checked.

You don't have to write code to contribute. One useful correction helps the next developer.

[Contribution guide →](CONTRIBUTING.md) · [Suggest a tool](https://github.com/abbosaliboev/free-ai-bible/issues/new?template=add-resource.yml) · [Report an update](https://github.com/abbosaliboev/free-ai-bible/issues/new?template=outdated-resource.yml)

## ⭐ Help another developer discover this

If you found something useful:

- **Star the repo** so you can find it for your next build.
- **Share a tool or starter** with a friend or your developer community.
- **Contribute one thing** you wish had been here when you started.

[English, Arabic & Uzbek sharing drafts →](docs/SHARING.md) · [Meet the contributors →](https://github.com/abbosaliboev/free-ai-bible/graphs/contributors)

## 📈 Star history

<a href="https://star-history.com/#abbosaliboev/free-ai-bible&Date">
  <picture>
    <source media="(prefers-color-scheme: dark)" srcset="https://api.star-history.com/svg?repos=abbosaliboev/free-ai-bible&type=Date&theme=dark" />
    <source media="(prefers-color-scheme: light)" srcset="https://api.star-history.com/svg?repos=abbosaliboev/free-ai-bible&type=Date" />
    <img alt="Star History Chart" src="https://api.star-history.com/svg?repos=abbosaliboev/free-ai-bible&type=Date" />
  </picture>
</a>

---

<div align="center">

**Built for developers who would rather ship than compare subscriptions.**

Open source · No affiliate links · No paid placement

</div>
