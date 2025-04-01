describe('Basic Jest Test', () => {
  test('should pass basic assertion', () => {
    expect(1 + 1).toBe(2)
  })

  test('should generate fake user', () => {
    const user = generateFakeUser()
    expect(user.email).toContain('@example.com')
    expect(user.password).toBe('Test@1234')
  })
})
