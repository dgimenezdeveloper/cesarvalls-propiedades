import { GoogleGenAI, Chat } from "@google/genai";
import { ChatMessage } from "../types";

// System instruction to define the persona of the AI
const SYSTEM_INSTRUCTION = `
Eres el Asistente Virtual Inteligente de Cesar Valls Propiedades, una inmobiliaria ubicada en Glew, Provincia de Buenos Aires.
Tu tono es profesional, cercano y eficiente.
Tu objetivo es ayudar a los visitantes a entender los servicios, guiarles en la búsqueda de propiedades y facilitar el contacto (teléfono/WhatsApp o formulario).

INFORMACIÓN DE LA EMPRESA:
1. SERVICIOS PRINCIPALES:
  - Compra, Venta y Alquiler de viviendas y locales en Glew y zonas aledañas.
  - Tasaciones y asesoramiento legal básico para operaciones inmobiliarias.
  - Gestión de alquileres y asesoramiento para propietarios.

2. VALORES:
  - Atención personalizada por profesional matriculado (Matrícula 4220).
  - Transparencia y acompañamiento durante todo el proceso.

3. DATOS DE CONTACTO PARA REFERENCIA:
  - Dirección: Andrade 52, Glew
  - Teléfono/WhatsApp: +54 11 5512 5144

SIEMPRE responde en Español. Si te preguntan por precios específicos, indica que dependen del proyecto y sugiere contactar mediante WhatsApp o el formulario para un presupuesto personalizado. Sé conciso y directo.
`;

let chatSession: Chat | null = null;

export const getChatResponseStream = async (
  history: ChatMessage[],
  newMessage: string
): Promise<AsyncIterable<string>> => {
  try {
    const apiKey = process.env.API_KEY;
    if (!apiKey) {
      throw new Error("API Key not found");
    }

    const ai = new GoogleGenAI({ apiKey });

    // Initialize chat if not already active or if history is empty (new session)
    if (!chatSession || history.length === 0) {
        chatSession = ai.chats.create({
            model: 'gemini-2.5-flash',
            config: {
                systemInstruction: SYSTEM_INSTRUCTION,
                temperature: 0.7,
            },
        });
    }

    // Convert internal history format if needed, but the SDK maintains its own history in the `chatSession` object.
    // However, since we are using a singleton-like pattern here for simplicity in this demo, 
    // we rely on the `chatSession` state.
    
    // Send message and get stream
    const result = await chatSession.sendMessageStream({ message: newMessage });
    
    // Create an async generator to yield text chunks
    async function* streamGenerator() {
      for await (const chunk of result) {
        if (chunk.text) {
          yield chunk.text;
        }
      }
    }

    return streamGenerator();

  } catch (error) {
    console.error("Error in Gemini Service:", error);
    // Return a generator that yields an error message
    async function* errorGenerator() {
      yield "Lo siento, hubo un problema al conectar con el asistente. Por favor intenta más tarde.";
    }
    return errorGenerator();
  }
};
