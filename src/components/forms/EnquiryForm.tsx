"use client";

import { useActionState } from "react";
import { Field } from "@/components/ui/Field";
import { ENQUIRY_HONEYPOT_FIELD, PROJECT_TYPES } from "@/constants/enquiry";
import { VISITOR_INTENTS } from "@/constants/intents";
import { submitEnquiry } from "@/server/actions/enquiry.action";
import type { EnquiryFieldErrors, EnquiryFormState, EnquiryFormValues } from "@/types/enquiry";
import type { EnquiryFormProps } from "@/types/ui";
import { buttonStyles } from "@/utils/button";
import { fieldA11y, inputClassName } from "@/utils/form";

const initialState: EnquiryFormState = { status: "idle" };
const NO_ERRORS: EnquiryFieldErrors = {};
const NO_VALUES: EnquiryFormValues = {};

export function EnquiryForm({ copy }: EnquiryFormProps) {
  const [state, formAction, pending] = useActionState(submitEnquiry, initialState);

  if (state.status === "success") {
    return (
      <div role="status" className="bg-canopy text-limewash rounded-sm p-8 md:p-10">
        <h3 className="font-wide text-2xl font-semibold">{copy.successTitle}</h3>
        <p className="text-limewash/80 mt-4 text-lg leading-relaxed">{copy.successBody}</p>
      </div>
    );
  }

  const errors = state.status === "invalid" ? state.fieldErrors : NO_ERRORS;
  const values = state.status === "idle" ? NO_VALUES : state.values;

  return (
    <form action={formAction} noValidate className="enquiry-form relative space-y-8">
      <fieldset aria-describedby={errors.intent ? "intent-error" : undefined}>
        <legend className="font-medium">{copy.intentLegend}</legend>
        <div className="mt-3 grid gap-3 sm:grid-cols-2">
          {VISITOR_INTENTS.map((intent) => (
            <label
              key={intent}
              className="border-canopy/25 bg-limewash has-checked:border-canopy has-checked:bg-canopy has-checked:text-limewash has-focus-visible:outline-canopy flex cursor-pointer items-center gap-3 rounded-sm border px-4 py-3 transition-colors has-focus-visible:outline-2 has-focus-visible:outline-offset-2"
            >
              <input
                type="radio"
                name="intent"
                value={intent}
                defaultChecked={values.intent === intent}
                className="accent-ochre"
              />
              {copy.intentOptions[intent]}
            </label>
          ))}
        </div>
        {errors.intent?.[0] && (
          <p id="intent-error" className="text-alert mt-2">
            {errors.intent[0]}
          </p>
        )}
      </fieldset>

      <div className="grid gap-8 sm:grid-cols-2">
        <Field id="name" label="Name" errors={errors.name}>
          <input
            id="name"
            name="name"
            autoComplete="name"
            defaultValue={values.name}
            className={inputClassName}
            {...fieldA11y("name", errors.name)}
          />
        </Field>
        <Field id="email" label="Email" errors={errors.email}>
          <input
            id="email"
            name="email"
            type="email"
            inputMode="email"
            autoComplete="email"
            defaultValue={values.email}
            className={inputClassName}
            {...fieldA11y("email", errors.email)}
          />
        </Field>
      </div>

      <Field id="organisation" label="Organisation" optional errors={errors.organisation}>
        <input
          id="organisation"
          name="organisation"
          autoComplete="organization"
          defaultValue={values.organisation}
          className={inputClassName}
          {...fieldA11y("organisation", errors.organisation)}
        />
      </Field>

      <div data-show-for="build" className="enquiry-conditional gap-8 sm:grid-cols-2">
        <Field id="projectType" label="Project type" errors={errors.projectType}>
          <select
            id="projectType"
            name="projectType"
            defaultValue={values.projectType ?? ""}
            className={inputClassName}
            {...fieldA11y("projectType", errors.projectType)}
          >
            <option value="" disabled>
              {copy.projectTypePlaceholder}
            </option>
            {PROJECT_TYPES.map((type) => (
              <option key={type} value={type}>
                {copy.projectTypeOptions[type]}
              </option>
            ))}
          </select>
        </Field>
        <Field id="location" label="Project location" optional errors={errors.location}>
          <input
            id="location"
            name="location"
            autoComplete="address-level2"
            defaultValue={values.location}
            className={inputClassName}
            {...fieldA11y("location", errors.location)}
          />
        </Field>
      </div>

      <div data-show-for="book" className="enquiry-conditional gap-8 sm:grid-cols-2">
        <Field id="eventDate" label="Event date" errors={errors.eventDate}>
          <input
            id="eventDate"
            name="eventDate"
            type="date"
            defaultValue={values.eventDate}
            className={inputClassName}
            {...fieldA11y("eventDate", errors.eventDate)}
          />
        </Field>
        <Field id="audienceSize" label="Expected audience" optional errors={errors.audienceSize}>
          <input
            id="audienceSize"
            name="audienceSize"
            type="number"
            min={1}
            inputMode="numeric"
            defaultValue={values.audienceSize}
            className={inputClassName}
            {...fieldA11y("audienceSize", errors.audienceSize)}
          />
        </Field>
      </div>

      <Field id="message" label="Message" errors={errors.message}>
        <textarea
          id="message"
          name="message"
          rows={6}
          defaultValue={values.message}
          className={inputClassName}
          {...fieldA11y("message", errors.message)}
        />
      </Field>

      {/* Honeypot: invisible to people, irresistible to bots */}
      <div aria-hidden="true" className="absolute -left-[10000px] h-px w-px overflow-hidden">
        <label htmlFor={ENQUIRY_HONEYPOT_FIELD}>Leave this field empty</label>
        <input
          id={ENQUIRY_HONEYPOT_FIELD}
          name={ENQUIRY_HONEYPOT_FIELD}
          type="text"
          tabIndex={-1}
          autoComplete="off"
        />
      </div>

      {state.status === "error" && (
        <p role="alert" className="text-alert">
          {copy.errorMessage}
        </p>
      )}

      <div className="flex flex-wrap items-center gap-6">
        <button type="submit" disabled={pending} className={buttonStyles("primary")}>
          {pending ? copy.pendingLabel : copy.submitLabel}
        </button>
        <p className="text-stone text-sm">{copy.privacyNote}</p>
      </div>
    </form>
  );
}
