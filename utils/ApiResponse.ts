export const ApiResponse = <T>(status: number, message: string, data?: T) => {
    return {
      status: status,
      message: message,
      data: data,
    };
  };