class LocalStorageService {
    private static instance: LocalStorageService;
  
    private constructor() {}
  
    public static getInstance(): LocalStorageService {
      if (!LocalStorageService.instance) {
        LocalStorageService.instance = new LocalStorageService();
      }
      return LocalStorageService.instance;
    }
  
    public setItem(key: string, value: string): void {
      localStorage.setItem(key, value);
    }
  
    public getItem(key: string): string | null {
      return localStorage.getItem(key);
    }
  
    public removeItem(key: string): void {
      localStorage.removeItem(key);
    }
  
    public clear(): void {
      localStorage.clear();
    }

    // Login method (sets auth token)
    public login(token: string): void {
        this.setItem("authToken", token);
    }

    // Logout method (removes auth token)
    public logout(): void {
        this.removeItem("authToken");
    }

    public isAuthenticated(): boolean {
        return !!this.getItem("authToken");
    }
  }
  
  export default LocalStorageService;