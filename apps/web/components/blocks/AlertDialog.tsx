import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogTitle,
  AlertDialogTrigger,
  Button,
  Flex,
  Heading,
  Text,
} from '@org/ui';
import { Block } from '@/components/Block';

export function AlertDialogBlock() {
  return (
    <Block title="Alert Dialog">
      <AlertDialog>
        <AlertDialogTrigger asChild>
          <Button>Alert Dialog</Button>
        </AlertDialogTrigger>
        <AlertDialogContent>
          <AlertDialogTitle asChild>
            <Heading>Are you sure?</Heading>
          </AlertDialogTitle>
          <AlertDialogDescription asChild>
            <Text css={{ mt: '$2' }}>This will do a very dangerous thing. Thar be dragons!</Text>
          </AlertDialogDescription>
          <Flex css={{ jc: 'flex-end', gap: '$3', mt: '$5' }}>
            <AlertDialogCancel asChild>
              <Button ghost>Cancel</Button>
            </AlertDialogCancel>
            <AlertDialogAction asChild>
              <Button variant="red">Delete</Button>
            </AlertDialogAction>
          </Flex>
        </AlertDialogContent>
      </AlertDialog>
    </Block>
  );
}
