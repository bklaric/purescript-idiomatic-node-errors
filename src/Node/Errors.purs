module Errors where

import Error.Class (class Error, defaultMessage, defaultName)
import Node.Errors.Class (class NodeError, defaultCode, defaultStack)

foreign import data Error :: Type

instance errorError :: Error Error where
    name = defaultName
    message = defaultMessage

instance nodeErrorError :: NodeError Error where
    code = defaultCode
    stack = defaultStack