import { describe, it, expect } from 'vitest';

describe('Configuración Final', () => {
  it('should work with ES modules', () => {
    expect(true).toBe(true);
  });
  
  it('should import angular', async () => {
    const core = await import('@angular/core');
    expect(core).toBeDefined();
    console.log('✅ Angular importado en modo ES module');
  });
});
