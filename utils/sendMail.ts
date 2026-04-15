export const sendMail = async <T, E = Error>(info: any) => {
  const EMAILJS_API = "https://api.emailjs.com/api/v1.0/email/send";
  const SERVICE_ID = "service_aws6vcc";
  const TEMPLATE_ID = "template_b7p0bgb";
  const PUBLIC_KEY = "XmqnRp_8-2pvHfWdv";
  const SEND_TO_EMAILS =
    "pranay.chatterjee29@gmail.com, subrata.ash@gmail.com, meetuon23@gmail.com";
  const FROM_EMAIL = "meetuon23@gmail.com";

  let response: T | null = null;
  let error: string | null = null;

  try {
    const fullName = String(info?.Name ?? "").trim();
    const [firstName = "", ...rest] = fullName.split(" ");
    const lastName = rest.join(" ");

    const payload = {
      service_id: SERVICE_ID,
      template_id: TEMPLATE_ID,
      user_id: PUBLIC_KEY,
      template_params: {
        to_email: SEND_TO_EMAILS,
        from_name: fullName || "{{first_name}} {{last_name}}",
        from_email: FROM_EMAIL,
        first_name: firstName,
        last_name: lastName,
        email: String(info?.Email ?? ""),
        phone: String(info?.Number ?? ""),
        message: String(info?.Message ?? ""),
        name: "Gmail",
      },
    };

    const apiResponse = await fetch(EMAILJS_API, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
      cache: "no-store",
    });

    if (!apiResponse.ok) {
      const errorText = await apiResponse.text();
      throw new Error(
        `Unable to send email (${apiResponse.status}): ${errorText}`
      );
    }

    response = "Successfully Submitted" as T;
  } catch (caughtError) {
    const err = caughtError as Error;
    response = err.message as T;
    error = err.message;
  }

  return { response, error: error as E | null };
};
