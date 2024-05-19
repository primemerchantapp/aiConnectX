import { defaultPreferences, usePreferences } from "@/hooks/use-preferences";
import { Info } from "@phosphor-icons/react";
import { useFormik } from "formik";
import { useEffect } from "react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Slider } from "../ui/slider";
import { Switch } from "../ui/switch";
import { Textarea } from "../ui/textarea";
import { Tooltip } from "../ui/tooltip";

export const CommonSettings = () => {
  const { getPreferences, setPreferences } = usePreferences();

  const formik = useFormik({
    initialValues: {
      systemPrompt: "",
      messageLimit: "all",
      temperature: 0.5,
      topP: 1,
      topK: 5,
      maxTokens: 1000,
    },
    onSubmit: (values) => {},
  });

  useEffect(() => {
    getPreferences().then((preferences) => {
      formik.setFieldValue(
        "systemPrompt",
        preferences.systemPrompt || defaultPreferences.systemPrompt
      );
      formik.setFieldValue(
        "messageLimit",
        preferences.messageLimit || defaultPreferences.messageLimit
      );
      formik.setFieldValue(
        "temperature",
        preferences.temperature || defaultPreferences.temperature
      );
      formik.setFieldValue("topP", preferences.topP || defaultPreferences.topP);
      formik.setFieldValue("topK", preferences.topK || defaultPreferences.topK);
      formik.setFieldValue(
        "maxTokens",
        preferences.maxTokens || defaultPreferences.maxTokens
      );
    });
  }, []);
  return (
    <div className="px-6 pb-12 flex flex-col items-start gap-2 h-full overflow-y-auto no-scrollbar">
      <p className="text-md font-medium text-zinc-600 dark:text-white py-4">
        Default Settings
      </p>

      <div className="flex flex-col w-full">
        <div className="flex flex-row items-center justify-between w-full">
          <p className="text-xs text-zinc-500 flex flex-row items-center gap-1">
            System Default Prompt <Info weight="regular" size={14} />
          </p>
          <Button variant="link" size="sm">
            Reset to Default
          </Button>
        </div>
        <Textarea
          name="systemPrompt"
          value={formik.values.systemPrompt}
          autoComplete="off"
          onChange={(e) => {
            setPreferences({ systemPrompt: e.target.value });
            formik.setFieldValue("systemPrompt", e.target.value);
          }}
        />
      </div>

      <div className="flex flex-col w-full">
        <div className="flex flex-row items-center justify-between w-full">
          <p className="text-xs flex flex-row gap-2 items-center  text-zinc-500">
            Messages Limit
          </p>
          <Button
            variant="link"
            size="sm"
            onClick={() => {
              setPreferences({ messageLimit: defaultPreferences.messageLimit });
              formik.setFieldValue(
                "messageLimit",
                defaultPreferences.messageLimit
              );
            }}
          >
            Reset to Default
          </Button>
        </div>

        <div className="flex flex-col gap-2 justify-between w-full p-3 bg-zinc-100 dark:bg-white/5 rounded-xl">
          <div className="flex flex-row w-full justify-between">
            <p className="text-sm">Use all Previous Messages</p>
            <Switch
              checked={formik.values.messageLimit === "all"}
              onCheckedChange={(checked) => {
                setPreferences({ messageLimit: checked ? "all" : 4 });
                formik.setFieldValue("messageLimit", checked ? "all" : 4);
              }}
            />
          </div>
          {formik.values.messageLimit !== "all" && (
            <>
              <p className="text-xs flex flex-row gap-2 items-center text-zinc-500">
                Message Limit <Info weight="regular" size={14} />
              </p>

              <Input
                name="messageLimit"
                type="number"
                value={formik.values.messageLimit}
                autoComplete="off"
                onChange={(e) => {
                  setPreferences({ messageLimit: Number(e.target.value) });
                  formik.setFieldValue("messageLimit", Number(e.target.value));
                }}
              />
            </>
          )}
        </div>
      </div>

      <div className="flex flex-col w-full">
        <div className="flex flex-row items-center justify-between w-full">
          <p className="flex flex-row text-xs items-center gap-1  text-zinc-500">
            Max Tokens <Info weight="regular" size={14} />
          </p>
          <Button
            variant="link"
            size="sm"
            onClick={() => {
              setPreferences({ maxTokens: defaultPreferences.maxTokens });
              formik.setFieldValue("maxTokens", defaultPreferences.maxTokens);
            }}
          >
            Reset to Default
          </Button>
        </div>

        <Input
          name="maxTokens"
          type="number"
          value={formik.values.maxTokens}
          autoComplete="off"
          onChange={(e) => {
            setPreferences({ maxTokens: Number(e.target.value) });
            formik.setFieldValue("maxTokens", Number(e.target.value));
          }}
        />
      </div>
      <div className="grid grid-cols-2 w-full gap-2">
        <div className="flex flex-col">
          <div className="flex flex-row items-center justify-between w-full">
            <Tooltip content="Temprature">
              <p className="text-xs text-zinc-500 flex flex-row items-center gap-1">
                Temperature <Info weight="regular" size={14} />
              </p>
            </Tooltip>
            <Button
              variant="link"
              size="sm"
              onClick={() => {
                setPreferences({ temperature: defaultPreferences.temperature });
                formik.setFieldValue(
                  "temperature",
                  defaultPreferences.temperature
                );
              }}
            >
              Reset to Default
            </Button>
          </div>
          <div className="flex flex-col gap-2 justify-between w-full p-3 bg-zinc-100 dark:bg-white/5 rounded-xl">
            <p className="text-xl  text-zinc-600 dark:text-white font-medium">
              {formik.values.temperature}
            </p>
            <Slider
              className="my-2"
              value={[Number(formik.values.temperature)]}
              step={0.1}
              min={0.1}
              max={1}
              onValueChange={(value: number[]) => {
                setPreferences({ temperature: value?.[0] });
                formik.setFieldValue("temperature", value?.[0]);
              }}
            />
            <div className="flex flex-row justify-between w-full">
              <p className="text-xs text-zinc-400 dark:text-zinc-600">
                Precise
              </p>
              <p className="text-xs  text-zinc-400 dark:text-zinc-600">
                Neutral
              </p>
              <p className="text-xs  text-zinc-400 dark:text-zinc-600">
                Creative
              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-col">
          <div className="flex flex-row items-center justify-between w-full">
            <Tooltip content="TopP">
              <p className="text-xs flex flex-row gap-1 items-center  text-zinc-500">
                TopP <Info weight="regular" size={14} />
              </p>
            </Tooltip>
            <Button
              variant="link"
              size="sm"
              onClick={() => {
                setPreferences({ topP: defaultPreferences.topP });
                formik.setFieldValue("topP", defaultPreferences.topP);
              }}
            >
              Reset to Default
            </Button>
          </div>
          <div className="flex flex-col gap-2 justify-between w-full p-3 bg-zinc-100 dark:bg-white/5 rounded-xl">
            <p className="text-xl  text-zinc-600 dark:text-white font-medium">
              {formik.values.topP}
            </p>
            <Slider
              className="my-2"
              value={[Number(formik.values.topP)]}
              min={0}
              name="topP"
              step={0.01}
              max={1}
              onValueChange={(value: number[]) => {
                setPreferences({ topP: value?.[0] });
                formik.setFieldValue("topP", value?.[0]);
              }}
            />
            <div className="flex flex-row justify-between w-full">
              <p className="text-xs  text-zinc-400 dark:text-zinc-600">
                Precise
              </p>
              <p className="text-xs  text-zinc-400 dark:text-zinc-600">
                Creative
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-col">
          <div className="flex flex-row items-center justify-between w-full">
            <Tooltip content="TopK">
              <p className="text-xs flex flex-row gap-1 items-center  text-zinc-500">
                TopK <Info weight="regular" size={14} />
              </p>
            </Tooltip>
            <Button
              variant="link"
              size="sm"
              onClick={() => {
                setPreferences({ topK: defaultPreferences.topK });
                formik.setFieldValue("topK", defaultPreferences.topK);
              }}
            >
              Reset to Default
            </Button>
          </div>
          <div className="flex flex-col gap-2 justify-between w-full p-3 bg-zinc-100 dark:bg-white/5 rounded-xl">
            <p className="text-xl  text-zinc-600 dark:text-white font-medium">
              {formik.values.topK}
            </p>
            <Slider
              className="my-2"
              value={[Number(formik.values.topK)]}
              min={0}
              step={1}
              max={100}
              onValueChange={(value: number[]) => {
                setPreferences({ topK: value?.[0] });
                formik.setFieldValue("topK", value?.[0]);
              }}
            />
            <div className="flex flex-row justify-between w-full">
              <p className="text-xs  text-zinc-400 dark:text-zinc-600">
                Precise
              </p>
              <p className="text-xs  text-zinc-400 dark:text-zinc-600">
                Creative
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};