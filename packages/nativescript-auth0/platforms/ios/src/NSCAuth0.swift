import Foundation
import Auth0
import JWTDecode

@objcMembers
@objc(NSCAuth0Credentials)
public class NSCAuth0Credentials: NSObject {
  let credentials: Credentials
  init(credentials: Credentials) {
    self.credentials = credentials
  }
  
  public init(_ accessToken: String?,
              _ tokenType: String?,
              _ idToken: String?,
              _ refreshToken: String?,
              _ expiresIn: Date?,
              _ scope: String?,
              _ recoveryCode: String?) {
    credentials = Credentials(accessToken: accessToken ?? "", tokenType: tokenType ?? "", idToken: idToken ?? "", refreshToken: refreshToken, expiresIn: expiresIn ?? Date(), scope: scope, recoveryCode: recoveryCode)
    super.init()
  }
  
  public var accessToken: String {
    return credentials.accessToken
  }
  
  public var tokenType: String {
    return credentials.tokenType
  }
  
  public var idToken: String {
    return credentials.idToken
  }
  
  public var refreshToken: String? {
    return credentials.refreshToken
  }
  
  public var expiresIn: Date {
    return credentials.expiresIn
  }
  
  public var scope: String? {
    return credentials.scope
  }
  
  public var recoveryCode: String? {
    return credentials.recoveryCode
  }
}

@objcMembers
@objc(NSCAuth0WebAuth)
public class NSCAuth0WebAuth: NSObject {
  var webAuth: WebAuth
  init(webAuth: WebAuth) {
    self.webAuth = webAuth
  }
  
  public func useHTTPS() -> NSCAuth0WebAuth {
    webAuth = self.webAuth.useHTTPS()
    return self
  }
  
  public func start(_ scope: String? = nil, _ audience: String? = nil, _ callback: @escaping (NSCAuth0Credentials?, Error?)->Void){
    Task {
      do {
        if let scope = scope {
          webAuth = self.webAuth.scope(scope)
        }
        if let audience = audience {
          webAuth = self.webAuth.audience(audience)
        }
        let result = try await webAuth.start()
        callback(NSCAuth0Credentials(credentials: result), nil)
      }catch {
        callback(nil, error)
      }
    }
  }
  
  public func clearSession(federated: Bool = false, _ callback: @escaping (Error?)->Void){
    Task {
      do {
       try await webAuth.clearSession(federated: federated)
        callback(nil)
      }catch {
        callback(error)
      }
    }
  }
}


@objcMembers
@objc(NSCAuth0DecodedJWT)
public class NSCAuth0DecodedJWT: NSObject {
  let decodedJWT: JWT
  init(decodedJWT: JWT) {
    self.decodedJWT = decodedJWT
  }
  
  
  public var header: [String: Any] {
    return decodedJWT.header
  }

  public var body: [String: Any] {
    return decodedJWT.body
  }

  public var signature: String? {
    return decodedJWT.signature
  }

  public var string: String { return decodedJWT.string }

  public var expiresAt: Date? { return decodedJWT.expiresAt }

  public var issuer: String? { return decodedJWT.issuer }

  public var subject: String? { return decodedJWT.subject }

  public var audience: [String]? { return decodedJWT.audience }

  public var issuedAt: Date? { return decodedJWT.issuedAt }

  public var notBefore: Date? { return decodedJWT.notBefore }

  public var identifier: String? { return decodedJWT.identifier }

  public var expired: Bool { return decodedJWT.expired }

  public func expires(in seconds: Int) -> Bool {
    return decodedJWT.expires(in: seconds)
  }
}

@objcMembers
@objc(NSCAuth0DatabaseUser)
public class NSCAuth0DatabaseUser: NSObject {
  let user: DatabaseUser
  init(user: DatabaseUser) {
    self.user = user
  }
  
  var email: String {
    return user.email
  }
  
  var username: String? {
    return user.username
  }
  
  var verified: Bool {
    return user.verified
  }
}

@objcMembers
@objc(NSCAuth0Authentication)
public class NSCAuth0Authentication: NSObject {
  let authentication: Authentication
  init(authentication: Authentication) {
    self.authentication = authentication
  }
  
  public func signup(_ email: String, _ username: String?, _ password: String, _ connection: String,_  userMetadata: [String: Any]?, _ rootAttributes: [String: Any]?, _ callback: @escaping (NSCAuth0DatabaseUser?, Error?) -> Void) {
    Task {
      do {
        let request = authentication.signup(email: email, username: username, password: password, connection: connection, userMetadata: userMetadata, rootAttributes: rootAttributes)
        let user = try await request.start()
        callback(NSCAuth0DatabaseUser(user: user), nil)
      }catch {
        callback(nil, error)
      }
    }
  }
  
  public func revoke(_ refreshToken: String,  _ headers: [String: String]?, _ callback: @escaping (Error?) -> Void){
    Task {
      do {
        var request = authentication.revoke(refreshToken: refreshToken)
        if let headers = headers {
          request = request.headers(headers)
        }
        _ = try await request.start()
        callback(nil)
      }catch {
        callback(error)
      }
    }
  }
  
  public func userInfo(_ token: String, _ headers: [String: String]?, _ callback: @escaping (NSCAuth0UserInfo?, Error?) -> Void){
    Task {
      do {
        var request = authentication.userInfo(withAccessToken: token)
        if let headers = headers {
          request = request.headers(headers)
        }
        
        let info = try await request.start()
        
        callback(NSCAuth0UserInfo(info: info), nil)
        
      }catch {
        callback(nil, error)
      }
    }
  }
  
  public func refreshToken(_ refreshToken: String, _ scope: String?, _ audience: String? = nil, _ callback: @escaping (NSCAuth0Credentials?, Error?) -> Void){
    Task {
      do {
        let request = authentication.renew(withRefreshToken: refreshToken, audience: audience, scope: scope)
        let credentials = try await request.start()
        callback(NSCAuth0Credentials(credentials: credentials), nil)
      }catch {
        callback(nil, error)
      }
    }
  }
}

@objcMembers
@objc(NSCAuth0UserInfo)
public class NSCAuth0UserInfo: NSObject {
  let info: UserInfo
  init(info: UserInfo) {
    self.info = info
  }
  
  public var sub: String {
    return info.sub
  }

  public var name: String? {
    return info.name
  }
  
  public var givenName: String? {
    return info.givenName
  }

  public var familyName: String? {
    return info.familyName
  }

  public var middleName: String?{
    return info.middleName
  }

  public var nickname: String? {
    return info.nickname
  }

  public var preferredUsername: String? {
    return info.preferredUsername
  }

  public var profile: URL? {
    return info.profile
  }

  public var picture: URL? {
    return info.picture
  }

  public var website: URL? {
    return info.website
  }

  public var email: String? {
    return info.email
  }

  public var emailVerified: Bool{
    return info.emailVerified ?? false
  }

  public var gender: String?{
    return info.gender
  }

  public var birthdate: String?{
    return info.birthdate
  }

  public var zoneinfo: TimeZone?{
    return info.zoneinfo
  }

  public var locale: Locale?{
    return info.locale
  }

  public var phoneNumber: String?{
    return info.phoneNumber
  }

  public var phoneNumberVerified: Bool{
    return info.phoneNumberVerified ?? false
  }


  public var address: [String: String]?{
    return info.address
  }


  public var updatedAt: Date?{
    return info.updatedAt
  }


  public var customClaims: [String: Any]? {
    return info.customClaims
  }
}

@objcMembers
@objc(NSCAuth0CredentialsManager)
public class NSCAuth0CredentialsManager: NSObject {
  let credentialsManager: CredentialsManager
  init(credentialsManager: CredentialsManager) {
    self.credentialsManager = credentialsManager
  }
  
  public func credentials(_ scope: String?,_ minTtl: Int = 0 , _ parameters: [String : Any],_ forceRefresh: Bool = false, _ callback: @escaping (NSCAuth0Credentials?, Error?) -> Void){
    Task {
      do {
        if(forceRefresh){
          let credentials = try await credentialsManager.renew(parameters: parameters)
          callback(NSCAuth0Credentials(credentials: credentials), nil)
        }else {
          let credentials = try await credentialsManager.credentials(withScope: scope, minTTL: minTtl, parameters: parameters)
          callback(NSCAuth0Credentials(credentials: credentials), nil)
        }
      }catch {
        callback(nil, error)
      }
    }
  }
  
  public func hasValid(_ minTTL: Int = 0) -> Bool {
    return credentialsManager.hasValid(minTTL: minTTL)
  }
  
  public func store(_ credentials: NSCAuth0Credentials) -> Bool {
    return credentialsManager.store(credentials: credentials.credentials)
  }
  
  public func clear() -> Bool{
    return credentialsManager.clear()
  }
  
  public func user() -> NSCAuth0UserInfo? {
    guard let user = credentialsManager.user else {
      return nil
    }
    return NSCAuth0UserInfo(info: user)
  }
  
  public func canRenew()-> Bool {
    return credentialsManager.canRenew()
  }
}

@objcMembers
@objc(NSCAuth0)
public class NSCAuth0: NSObject {
  
  public static func credentialsManager(authentication : NSCAuth0Authentication) -> NSCAuth0CredentialsManager {
    return NSCAuth0CredentialsManager(credentialsManager: CredentialsManager(authentication: authentication.authentication))
  }
  
  public static func authentication(session: URLSession = .shared, bundle: Bundle = Bundle.main) -> NSCAuth0Authentication{
    return NSCAuth0Authentication(authentication: Auth0.authentication(session: session, bundle: bundle))
  }
  
  public static func authentication(clientId: String, domain: String, session: URLSession = .shared) -> NSCAuth0Authentication{
    return NSCAuth0Authentication(authentication: Auth0.authentication(clientId: clientId, domain: domain, session: session))
  }
  
  public static func webAuth(session: URLSession = .shared, bundle: Bundle = Bundle.main) -> NSCAuth0WebAuth{
    return NSCAuth0WebAuth(webAuth:  Auth0.webAuth(session: session, bundle: bundle))
  }
  
  public static func webAuth(clientId: String, domain: String, session: URLSession = .shared) -> NSCAuth0WebAuth{
    return NSCAuth0WebAuth(webAuth: Auth0.webAuth(clientId: clientId, domain: domain, session: session))
  }

  public static func decodeJWT(_ token: String) throws -> NSCAuth0DecodedJWT {
    try NSCAuth0DecodedJWT(decodedJWT: JWTDecode.decode(jwt: token))
  }
}
