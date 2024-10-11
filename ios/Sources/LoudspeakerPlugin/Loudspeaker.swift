import Foundation

@objc public class Loudspeaker: NSObject {
    @objc public func echo(_ value: String) -> String {
        print(value)
        return value
    }
}
