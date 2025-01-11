export class WhatsAppError extends Error {
  constructor(message: string) {
    super(message)
    this.name = 'WhatsAppError'
  }
} 