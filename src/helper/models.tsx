import { ModelIcon } from "@/components/model-icon";
import { TModelItem } from "@/types";

const models: TModelItem[] = [
  {
    name: "GPT 4o",
    key: "gpt-4o",
    tokens: 128000,
    isNew: true,
    inputPrice: 5,
    outputPrice: 15,
    plugins: ["web_search", "image_generation", "memory", "chart"],
    icon: (size) => <ModelIcon size={size} type="gpt4" />,
    baseModel: "openai",
    maxOutputTokens: 2048,
  },
  {
    name: "GPT4 Turbo",
    key: "gpt-4-turbo",
    tokens: 128000,
    isNew: false,
    plugins: ["web_search", "image_generation", "memory"],
    inputPrice: 10,
    outputPrice: 30,
    icon: (size) => <ModelIcon size={size} type="gpt4" />,
    baseModel: "openai",
    maxOutputTokens: 4095,
  },
  {
    name: "GPT4",
    key: "gpt-4",
    tokens: 128000,
    isNew: false,
    plugins: ["web_search", "image_generation", "memory"],
    inputPrice: 30,
    outputPrice: 60,
    icon: (size) => <ModelIcon size={size} type="gpt4" />,
    baseModel: "openai",
    maxOutputTokens: 4095,
  },
  {
    name: "GPT3.5 Turbo",
    key: "gpt-3.5-turbo",
    isNew: false,
    inputPrice: 0.5,
    outputPrice: 1.5,
    plugins: ["web_search", "image_generation", "memory"],
    tokens: 16385,
    icon: (size) => <ModelIcon size={size} type="gpt3" />,
    baseModel: "openai",
    maxOutputTokens: 4095,
  },
  {
    name: "GPT3.5 Turbo 0125",
    key: "gpt-3.5-turbo-0125",
    isNew: false,
    tokens: 16385,
    plugins: ["web_search", "image_generation", "memory"],
    icon: (size) => <ModelIcon size={size} type="gpt3" />,
    baseModel: "openai",
    maxOutputTokens: 4095,
  },
  {
    name: "Claude 3 Opus",
    key: "claude-3-opus-20240229",
    isNew: false,
    inputPrice: 15,
    outputPrice: 75,
    tokens: 200000,
    plugins: ["web_search", "image_generation", "memory"],
    icon: (size) => <ModelIcon size={size} type="anthropic" />,
    maxOutputTokens: 4095,
    baseModel: "anthropic",
  },
  {
    name: "Claude 3.5 Sonnet",
    inputPrice: 3,
    outputPrice: 15,
    plugins: [],
    key: "claude-3-5-sonnet-20240620",
    isNew: false,
    maxOutputTokens: 4095,
    tokens: 200000,
    icon: (size) => <ModelIcon size={size} type="anthropic" />,
    baseModel: "anthropic",
  },
  {
    name: "Claude 3 Sonnet",
    inputPrice: 3,
    outputPrice: 15,
    plugins: ["web_search", "image_generation", "memory"],
    key: "claude-3-sonnet-20240229",
    isNew: false,
    maxOutputTokens: 4095,
    tokens: 200000,
    icon: (size) => <ModelIcon size={size} type="anthropic" />,
    baseModel: "anthropic",
  },
  {
    name: "Claude 3 Haiku",
    key: "claude-3-haiku-20240307",
    isNew: false,
    inputPrice: 0.25,
    outputPrice: 1.5,
    tokens: 200000,
    plugins: [],
    maxOutputTokens: 4095,
    icon: (size) => <ModelIcon size={size} type="anthropic" />,
    baseModel: "anthropic",
  },
  {
    name: "Gemini Pro 1.5",
    key: "gemini-1.5-pro-latest",
    isNew: true,
    inputPrice: 3.5,
    outputPrice: 10.5,
    plugins: [],
    tokens: 200000,
    icon: (size) => <ModelIcon size={size} type="gemini" />,
    baseModel: "gemini",
    maxOutputTokens: 8190,
  },
  {
    name: "Gemini Flash 1.5",
    key: "gemini-1.5-flash-latest",
    isNew: true,
    inputPrice: 0.35,
    outputPrice: 1.05,
    plugins: [],
    tokens: 200000,
    icon: (size) => <ModelIcon size={size} type="gemini" />,
    baseModel: "gemini",
    maxOutputTokens: 8190,
  },
  {
    name: "Gemini Pro",
    isNew: false,
    key: "gemini-pro",
    inputPrice: 0.5,
    outputPrice: 1.5,
    plugins: [],
    tokens: 200000,
    icon: (size) => <ModelIcon size={size} type="gemini" />,
    baseModel: "gemini",
    maxOutputTokens: 4095,
  },
];